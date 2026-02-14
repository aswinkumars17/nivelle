package com.nivelle.repository;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.nivelle.model.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.concurrent.ExecutionException;

@Slf4j
@Repository
@RequiredArgsConstructor
public class UserRepository {

    private final Firestore firestore;
    private static final String COLLECTION = "users";

    public User save(User user) throws ExecutionException, InterruptedException {
        DocumentReference docRef;
        if (user.getId() == null) {
            docRef = firestore.collection(COLLECTION).document();
            user.setId(docRef.getId());
        } else {
            docRef = firestore.collection(COLLECTION).document(user.getId());
        }
        
        ApiFuture<WriteResult> result = docRef.set(user);
        result.get();
        log.debug("User saved with ID: {}", user.getId());
        return user;
    }

    public User findByEmail(String email) throws ExecutionException, InterruptedException {
        ApiFuture<QuerySnapshot> query = firestore.collection(COLLECTION)
                .whereEqualTo("email", email)
                .limit(1)
                .get();
        
        QuerySnapshot snapshot = query.get();
        if (snapshot.isEmpty()) {
            return null;
        }
        
        DocumentSnapshot doc = snapshot.getDocuments().get(0);
        User user = doc.toObject(User.class);
        if (user != null) {
            user.setId(doc.getId());
        }
        return user;
    }

    public User findById(String id) throws ExecutionException, InterruptedException {
        DocumentReference docRef = firestore.collection(COLLECTION).document(id);
        ApiFuture<DocumentSnapshot> future = docRef.get();
        DocumentSnapshot doc = future.get();
        
        if (!doc.exists()) {
            return null;
        }
        
        User user = doc.toObject(User.class);
        if (user != null) {
            user.setId(doc.getId());
        }
        return user;
    }

    public boolean existsByEmail(String email) throws ExecutionException, InterruptedException {
        return findByEmail(email) != null;
    }
}
