package com.nivelle.repository;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.nivelle.model.Product;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Slf4j
@Repository
@RequiredArgsConstructor
public class ProductRepository {

    private final Firestore firestore;
    private static final String COLLECTION = "products";

    public Product save(Product product) throws ExecutionException, InterruptedException {
        DocumentReference docRef;
        if (product.getId() == null) {
            docRef = firestore.collection(COLLECTION).document();
            product.setId(docRef.getId());
        } else {
            docRef = firestore.collection(COLLECTION).document(product.getId());
        }
        
        ApiFuture<WriteResult> result = docRef.set(product);
        result.get();
        log.debug("Product saved with ID: {}", product.getId());
        return product;
    }

    public Product findById(String id) throws ExecutionException, InterruptedException {
        DocumentReference docRef = firestore.collection(COLLECTION).document(id);
        ApiFuture<DocumentSnapshot> future = docRef.get();
        DocumentSnapshot doc = future.get();
        
        if (!doc.exists()) {
            return null;
        }
        
        Product product = doc.toObject(Product.class);
        if (product != null) {
            product.setId(doc.getId());
        }
        return product;
    }

    public List<Product> findAll() throws ExecutionException, InterruptedException {
        ApiFuture<QuerySnapshot> query = firestore.collection(COLLECTION)
                .whereEqualTo("active", true)
                .orderBy("name")
                .get();
        
        QuerySnapshot snapshot = query.get();
        List<Product> products = new ArrayList<>();
        
        for (DocumentSnapshot doc : snapshot.getDocuments()) {
            Product product = doc.toObject(Product.class);
            if (product != null) {
                product.setId(doc.getId());
                products.add(product);
            }
        }
        return products;
    }

    public List<Product> findByCategoryId(String categoryId) throws ExecutionException, InterruptedException {
        ApiFuture<QuerySnapshot> query = firestore.collection(COLLECTION)
                .whereEqualTo("categoryId", categoryId)
                .whereEqualTo("active", true)
                .orderBy("name")
                .get();
        
        QuerySnapshot snapshot = query.get();
        List<Product> products = new ArrayList<>();
        
        for (DocumentSnapshot doc : snapshot.getDocuments()) {
            Product product = doc.toObject(Product.class);
            if (product != null) {
                product.setId(doc.getId());
                products.add(product);
            }
        }
        return products;
    }

    public void deleteById(String id) throws ExecutionException, InterruptedException {
        DocumentReference docRef = firestore.collection(COLLECTION).document(id);
        ApiFuture<WriteResult> result = docRef.delete();
        result.get();
        log.debug("Product deleted with ID: {}", id);
    }

    public int countByCategoryId(String categoryId) throws ExecutionException, InterruptedException {
        ApiFuture<QuerySnapshot> query = firestore.collection(COLLECTION)
                .whereEqualTo("categoryId", categoryId)
                .whereEqualTo("active", true)
                .get();
        
        QuerySnapshot snapshot = query.get();
        return snapshot.size();
    }
}
