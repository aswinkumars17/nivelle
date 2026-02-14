# NIVELLE Full-Stack Implementation TODO

## Backend Requirements (Spring Boot)

### 1. Server Setup & Configuration
- [ ] Fix Firebase configuration to support dev mode without real credentials
- [ ] Create application-dev.properties for development environment
- [ ] Ensure all repositories work in both dev (in-memory) and prod (Firebase) modes
- [ ] Test server startup without errors
- [ ] Verify all endpoints are accessible

### 2. API Endpoints Testing
- [ ] **Authentication APIs**
  - [ ] POST /api/public/register - User registration
  - [ ] POST /api/public/login - User login
  - [ ] POST /api/auth/logout - User logout
  - [ ] GET /api/auth/me - Get current user

- [ ] **Public APIs** (No authentication required)
  - [ ] GET /api/public/categories - Get all categories
  - [ ] GET /api/public/products - Get all products
  - [ ] GET /api/public/products/{id} - Get product by ID
  - [ ] GET /api/public/categories/{id}/products - Get products by category

- [ ] **Admin APIs** (Admin authentication required)
  - [ ] POST /api/admin/categories - Create category
  - [ ] PUT /api/admin/categories/{id} - Update category
  - [ ] DELETE /api/admin/categories/{id} - Delete category
  - [ ] POST /api/admin/products - Create product
  - [ ] PUT /api/admin/products/{id} - Update product
  - [ ] DELETE /api/admin/products/{id} - Delete product

### 3. Backend Fixes Needed
- [ ] Fix Category model - add isActive() method or update repository to use getActive()
- [ ] Fix Product model - add isActive() method or update repository to use getActive()
- [ ] Ensure JWT token generation works correctly
- [ ] Verify password encoding with BCrypt
- [ ] Test admin user seeding on startup

## Frontend Requirements (React)

### 1. Authentication UI Components
- [ ] **SignIn Page** (/signin)
  - [ ] Email input field with validation
  - [ ] Password input field with validation
  - [ ] Submit button with loading state
  - [ ] Link to SignUp page
  - [ ] Error message display
  - [ ] Responsive design (mobile-friendly)
  - [ ] Dark/Light mode support

- [ ] **SignUp Page** (/signup)
  - [ ] Name input field
  - [ ] Email input field with validation
  - [ ] Password input field with strength indicator
  - [ ] Confirm password field
  - [ ] Submit button with loading state
  - [ ] Link to SignIn page
  - [ ] Error message display
  - [ ] Terms & conditions checkbox
  - [ ] Responsive design
  - [ ] Dark/Light mode support

### 2. AuthContext & State Management
- [ ] Create AuthContext.jsx
  - [ ] User state (user, isAuthenticated, isLoading)
  - [ ] Login function
  - [ ] Register function
  - [ ] Logout function
  - [ ] Token management (localStorage)
  - [ ] Auto-login on app start
  - [ ] Auth state persistence

- [ ] Create useAuth hook
  - [ ] Easy access to auth context
  - [ ] Helper functions for common auth operations

### 3. API Service Layer
- [ ] Create api.js service
  - [ ] Axios instance with base URL
  - [ ] Request interceptor to add JWT token
  - [ ] Response interceptor for error handling
  - [ ] Token refresh logic (if needed)
  - [ ] API methods for all endpoints:
    - [ ] auth.login(credentials)
    - [ ] auth.register(userData)
    - [ ] auth.logout()
    - [ ] auth.getCurrentUser()
    - [ ] categories.getAll()
    - [ ] categories.getById(id)
    - [ ] products.getAll()
    - [ ] products.getById(id)
    - [ ] products.getByCategory(categoryId)

### 4. Route Protection
- [ ] Update ProtectedRoute component
  - [ ] Check authentication status
  - [ ] Redirect to signin if not authenticated
  - [ ] Preserve intended destination

- [ ] Update AdminRoute component
  - [ ] Check admin role
  - [ ] Redirect to home if not admin
  - [ ] Show unauthorized message

- [ ] Update AppRoutes.jsx
  - [ ] Add /signin route
  - [ ] Add /signup route
  - [ ] Wrap protected routes
  - [ ] Wrap admin routes

### 5. UI Integration
- [ ] **Navbar Updates**
  - [ ] Show user name/avatar when logged in
  - [ ] Show SignIn/SignUp buttons when logged out
  - [ ] Add dropdown menu with:
    - [ ] Profile link
    - [ ] Orders link (if applicable)
    - [ ] Admin Dashboard link (if admin)
    - [ ] Logout button
  - [ ] Mobile menu updates

- [ ] **Home Page**
  - [ ] Add hero section CTA based on auth state
  - [ ] Show personalized welcome message

- [ ] **Footer Updates**
  - [ ] Add quick links to auth pages

### 6. Additional Frontend Improvements
- [ ] **Loading States**
  - [ ] Create LoadingSpinner component
  - [ ] Add loading states to all async operations
  - [ ] Skeleton loaders for better UX

- [ ] **Error Handling**
  - [ ] Create ErrorBoundary component
  - [ ] Global error toast notifications
  - [ ] Form validation error display

- [ ] **Toast Notifications**
  - [ ] Success messages (login, register, etc.)
  - [ ] Error messages
  - [ ] Info messages

## Testing Requirements

### 1. Backend Testing
- [ ] Test registration with valid data
- [ ] Test registration with duplicate email
- [ ] Test login with valid credentials
- [ ] Test login with invalid credentials
- [ ] Test JWT token generation and validation
- [ ] Test protected endpoint access without token
- [ ] Test protected endpoint access with valid token
- [ ] Test admin endpoint access with user token
- [ ] Test admin endpoint access with admin token

### 2. Frontend Testing
- [ ] Test SignIn form validation
- [ ] Test SignUp form validation
- [ ] Test successful login flow
- [ ] Test successful registration flow
- [ ] Test logout functionality
- [ ] Test protected route redirects
- [ ] Test auth state persistence after refresh
- [ ] Test mobile responsiveness

### 3. Integration Testing
- [ ] Full registration → login → access protected route flow
- [ ] Token expiration handling
- [ ] Network error handling
- [ ] Concurrent request handling

## Documentation Updates

### 1. CHANGELOG.md
- [ ] Add entry for full-stack authentication implementation
- [ ] Document new components
- [ ] Document API endpoints
- [ ] List breaking changes (if any)

### 2. README Updates
- [ ] Update setup instructions
- [ ] Document environment variables
- [ ] Add API documentation section
- [ ] Add authentication flow diagram

### 3. Code Comments
- [ ] Add JSDoc to all auth functions
- [ ] Add JavaDoc to backend auth classes
- [ ] Document component props

## Environment Configuration

### 1. Client Environment Variables
```
VITE_API_BASE_URL=http://localhost:8080/api
```

### 2. Server Environment Variables
```
JWT_SECRET=your-secret-key
JWT_EXPIRATION=86400000
FIREBASE_CONFIG_PATH=firebase/serviceAccountKey.json
CORS_ALLOWED_ORIGINS=http://localhost:5173
```

## Deployment Preparation

### 1. Production Checklist
- [ ] Remove dev mode configurations
- [ ] Set up real Firebase project
- [ ] Add Firebase service account key
- [ ] Configure production CORS
- [ ] Set strong JWT secret
- [ ] Enable HTTPS
- [ ] Add rate limiting
- [ ] Add request logging

## Priority Order

### Phase 1: Backend Foundation (Critical)
1. Fix backend compilation errors
2. Start server successfully
3. Test basic auth endpoints with curl/Postman

### Phase 2: Frontend Auth UI (Critical)
1. Create AuthContext
2. Create SignIn page
3. Create SignUp page
4. Add auth routes
5. Update Navbar with auth buttons

### Phase 3: Integration (High)
1. Connect frontend to backend
2. Test full auth flow
3. Add protected routes
4. Add admin routes

### Phase 4: Polish (Medium)
1. Add loading states
2. Add error handling
3. Add toast notifications
4. Mobile responsiveness check

### Phase 5: Documentation (Medium)
1. Update CHANGELOG.md
2. Add code comments
3. Update README

## Notes

- Default admin credentials: admin@nivelle.com / admin123
- Backend runs on port 8080
- Frontend runs on port 5173
- Use dev profile for development without Firebase
- All dates in ISO 8601 format
- API responses follow {success, message, data} format
