package com.nivelle.repository;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.nivelle.model.Category;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Slf4j
@Repository
@RequiredArgsConstructor
public class CategoryRepository {

    private final Firestore firestore;
    private static final String COLLECTION = "categories";

    public Category save(Category category) throws ExecutionException, InterruptedException {
        DocumentReference docRef;
        if (category.getId() == null) {
            docRef = firestore.collection(COLLECTION).document();
            category.setId(docRef.getId());
        } else {
            docRef = firestore.collection(COLLECTION).document(category.getId());
        }
        
        ApiFuture<WriteResult> result = docRef.set(category);
        result.get();
        log.debug("Category saved with ID: {}", category.getId());
        return category;
    }

    public Category findById(String id) throws ExecutionException, InterruptedException {
        DocumentReference docRef = firestore.collection(COLLECTION).document(id);
        ApiFuture<DocumentSnapshot> future = docRef.get();
        DocumentSnapshot doc = future.get();
        
        if (!doc.exists()) {
            return null;
        }
        
        Category category = doc.toObject(Category.class);
        if (category != null) {
            category.setId(doc.getId());
        }
        return category;
    }

    public List<Category> findAll() throws ExecutionException, InterruptedException {
        ApiFuture<QuerySnapshot> query = firestore.collection(COLLECTION)
                .whereEqualTo("active", true)
                .orderBy("name")
                .get();
        
        QuerySnapshot snapshot = query.get();
        List<Category> categories = new ArrayList<>();
        
        for (DocumentSnapshot doc : snapshot.getDocuments()) {
            Category category = doc.toObject(Category.class);
            if (category != null) {
                category.setId(doc.getId());
                categories.add(category);
            }
        }
        return categories;
    }

    public void deleteById(String id) throws ExecutionException, InterruptedException {
        DocumentReference docRef = firestore.collection(COLLECTION).document(id);
        ApiFuture<WriteResult> result = docRef.delete();
        result.get();
        log.debug("Category deleted with ID: {}", id);
    }

    public boolean existsByName(String name) throws ExecutionException, InterruptedException {
        ApiFuture<QuerySnapshot> query = firestore.collection(COLLECTION)
                .whereEqualTo("name", name)
                .whereEqualTo("active", true)
                .limit(1)
                .get();
        
        QuerySnapshot snapshot = query.get();
        return !snapshot.isEmpty();
    }
}
