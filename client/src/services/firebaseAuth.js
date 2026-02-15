import { auth, db } from '../config/firebase';
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  getIdTokenResult,
  onAuthStateChanged
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';

/**
 * Sign in user with email and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{user: object, role: string}>}
 */
export const loginWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const { user } = userCredential;
    
    // Get the ID token result to access custom claims (role)
    const idTokenResult = await getIdTokenResult(user, true);
    const role = idTokenResult.claims.role || 'user';
    
    return {
      user: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL
      },
      role
    };
  } catch (error) {
    console.error('Login error:', error);
    throw formatAuthError(error);
  }
};

/**
 * Register new user with email and password
 * @param {string} email
 * @param {string} password
 * @param {string} name
 * @returns {Promise<{user: object}>}
 */
export const registerWithEmail = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = userCredential;
    
    // Update user profile with display name
    await updateProfile(user, { displayName: name });
    
    // Create user document in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      email: user.email,
      displayName: name,
      role: 'user', // Default role
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      isActive: true
    });
    
    return {
      user: {
        uid: user.uid,
        email: user.email,
        displayName: name
      }
    };
  } catch (error) {
    console.error('Registration error:', error);
    throw formatAuthError(error);
  }
};

/**
 * Sign in with Google
 * @returns {Promise<{user: object, role: string, isNewUser: boolean}>}
 */
export const loginWithGoogle = async () => {
  try {
    const { googleProvider } = await import('../config/firebase');
    const userCredential = await signInWithPopup(auth, googleProvider);
    const { user } = userCredential;
    
    // Check if user document exists
    const userDocRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userDocRef);
    
    let role = 'user';
    let isNewUser = !userDoc.exists();
    
    if (!userDoc.exists()) {
      // Create new user document for Google sign-in
      await setDoc(userDocRef, {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        role: 'user',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        isActive: true,
        provider: 'google'
      });
    } else {
      role = userDoc.data().role || 'user';
    }
    
    return {
      user: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL
      },
      role,
      isNewUser
    };
  } catch (error) {
    console.error('Google login error:', error);
    throw formatAuthError(error);
  }
};

/**
 * Logout current user
 * @returns {Promise<void>}
 */
export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Logout error:', error);
    throw formatAuthError(error);
  }
};

/**
 * Send password reset email
 * @param {string} email
 * @returns {Promise<void>}
 */
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.error('Password reset error:', error);
    throw formatAuthError(error);
  }
};

/**
 * Get current user role from custom claims or Firestore
 * @param {object} user - Firebase user object
 * @returns {Promise<string>}
 */
export const getUserRole = async (user) => {
  if (!user) return null;
  
  try {
    // First check custom claims (for email/password users)
    const idTokenResult = await getIdTokenResult(user, true);
    if (idTokenResult.claims.role) {
      return idTokenResult.claims.role;
    }
    
    // Fallback: Check Firestore (for Google sign-in users)
    const userDocRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userDocRef);
    
    if (userDoc.exists()) {
      const userData = userDoc.data();
      return userData.role || 'user';
    }
    
    return 'user';
  } catch (error) {
    console.error('Get user role error:', error);
    return 'user';
  }
};

/**
 * Subscribe to auth state changes
 * @param {function} callback - Callback function(user, role)
 * @returns {function} Unsubscribe function
 */
export const subscribeToAuthChanges = (callback) => {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        // Get role from custom claims or Firestore
        const role = await getUserRole(user);
        console.log('User authenticated:', user.email, 'Role:', role);
        callback(user, role);
      } catch (error) {
        console.error('Auth state change error:', error);
        callback(user, 'user'); // Default to user role on error
      }
    } else {
      callback(null, null);
    }
  });
};

/**
 * Format Firebase auth errors to user-friendly messages
 * @param {object} error - Firebase error object
 * @returns {Error}
 */
const formatAuthError = (error) => {
  const errorMessages = {
    'auth/invalid-email': 'Invalid email address format.',
    'auth/user-disabled': 'This account has been disabled.',
    'auth/user-not-found': 'No account found with this email.',
    'auth/wrong-password': 'Incorrect password.',
    'auth/email-already-in-use': 'An account already exists with this email.',
    'auth/weak-password': 'Password should be at least 6 characters.',
    'auth/invalid-credential': 'Invalid email or password.',
    'auth/popup-closed-by-user': 'Sign-in popup was closed.',
    'auth/cancelled-popup-request': 'Sign-in was cancelled.',
    'auth/account-exists-with-different-credential': 'An account already exists with this email using a different sign-in method.',
    'auth/requires-recent-login': 'Please log in again to complete this action.',
    'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
    'auth/network-request-failed': 'Network error. Please check your connection.'
  };
  
  const message = errorMessages[error.code] || error.message || 'An error occurred. Please try again.';
  const formattedError = new Error(message);
  formattedError.code = error.code;
  formattedError.originalError = error;
  return formattedError;
};
