# NIVELLE Full-Stack Application - Complete Setup Guide

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Prerequisites](#prerequisites)
4. [Firebase Setup](#firebase-setup)
5. [Backend Configuration](#backend-configuration)
6. [Frontend Configuration](#frontend-configuration)
7. [Running the Application](#running-the-application)
8. [Testing](#testing)
9. [Troubleshooting](#troubleshooting)
10. [Production Deployment](#production-deployment)

---

## Project Overview

**NIVELLE** is a production-grade furniture e-commerce application with:

- **Frontend**: React + Vite (Port 5173)
- **Backend**: Spring Boot + Maven (Port 8080)
- **Database**: Firebase Firestore (NoSQL)
- **Authentication**: JWT with Role-Based Access Control
- **Architecture**: Layered Monolith with strict separation

### Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, Axios, Tailwind CSS |
| Backend | Spring Boot 3.2, Java 17, Maven |
| Security | Spring Security, JWT, BCrypt |
| Database | Firebase Firestore |
| Cloud | Firebase Admin SDK |

---

## Architecture

### Backend Layer Structure

```
Controller → Service → Repository → Firestore
```

**Controller Layer**:
- Handles HTTP requests/responses
- Input validation
- Calls service layer
- Returns standardized API responses

**Service Layer**:
- Contains all business logic
- Enforces data consistency
- Manages transactions
- Handles productCount updates

**Repository Layer**:
- Pure Firestore interactions
- CRUD operations
- Query execution
- No business logic

**Security Layer**:
- JWT token generation/validation
- Role-based access control
- Request filtering

### API Contract

All API responses follow this structure:

```json
{
  "success": boolean,
  "message": "string",
  "data": object | null
}
```

---

## Prerequisites

### Required Software

1. **Java Development Kit (JDK) 17 or higher**
   - Download: https://adoptium.net/
   - Verify: `java -version`

2. **Maven 3.8+**
   - Download: https://maven.apache.org/download.cgi
   - Verify: `mvn -version`

3. **Node.js 18+ and npm**
   - Download: https://nodejs.org/
   - Verify: `node -v && npm -v`

4. **Git**
   - Download: https://git-scm.com/

---

## Firebase Setup

### Step 1: Create Firebase Account

1. Go to https://firebase.google.com/
2. Click "Get Started" or "Go to Console"
3. Sign in with your Google account
4. Click "Create a project"

### Step 2: Create New Project

1. **Project name**: `nivelle-furniture`
2. **Google Analytics**: Optional (can skip for now)
3. Click "Create Project"
4. Wait for project creation to complete

### Step 3: Enable Firestore Database

1. In Firebase Console, click "Firestore Database" from left sidebar
2. Click "Create Database"
3. **Start in production mode** (recommended)
4. **Location**: Select region closest to your users (e.g., `us-central`)
5. Click "Enable"

### Step 4: Generate Service Account Key

1. Click the gear icon (⚙️) next to "Project Overview" → "Project Settings"
2. Go to "Service Accounts" tab
3. Click "Generate new private key"
4. Click "Generate key"
5. **SAVE** the downloaded JSON file securely

### Step 5: Place Service Account Key

Create the directory structure and place the key:

```bash
# Create directory
mkdir -p server/nivelle/src/main/resources/firebase

# Move the downloaded file (replace with your actual filename)
mv path/to/downloaded-key.json server/nivelle/src/main/resources/firebase/serviceAccountKey.json
```

**Important**: Never commit this file to Git. It's already in `.gitignore`.

---

## Backend Configuration

### Step 1: Verify Project Structure

```
server/nivelle/
├── pom.xml
├── src/
│   └── main/
│       ├── java/
│       │   └── com/nivelle/
│       │       ├── config/
│       │       ├── controller/
│       │       ├── dto/
│       │       ├── exception/
│       │       ├── model/
│       │       ├── repository/
│       │       ├── security/
│       │       ├── service/
│       │       └── util/
│       └── resources/
│           ├── application.properties
│           └── firebase/
│               └── serviceAccountKey.json
```

### Step 2: Update application.properties

File: `server/nivelle/src/main/resources/application.properties`

```properties
# Application
spring.application.name=nivelle

# Server
server.port=8080
server.error.include-message=always

# JWT Configuration (Change in production!)
jwt.secret=nivelle-enterprise-jwt-secret-key-production-2024-change-this-in-production
jwt.expiration=86400000

# Firebase
firebase.config.path=firebase/serviceAccountKey.json

# CORS (Frontend URL)
cors.allowed-origins=http://localhost:5173

# Logging
logging.level.com.nivelle=DEBUG
```

### Step 3: Security - Update .gitignore

Ensure your `.gitignore` includes:

```
# Firebase
**/firebase/serviceAccountKey.json
*.json.key

# Java
/target/
*.class
*.jar
*.war

# IDE
.idea/
.vscode/
*.iml

# OS
.DS_Store
Thumbs.db
```

---

## Frontend Configuration

### Step 1: Install Dependencies

```bash
cd client
npm install
```

### Step 2: Create API Configuration

File: `client/src/services/api.js`

```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - Add JWT token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - Handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
```

---

## Running the Application

### Correct Startup Order

**IMPORTANT**: Start backend first, then frontend.

### 1. Start Backend

```bash
cd server/nivelle

# Clean and compile
mvn clean compile

# Run Spring Boot application
mvn spring-boot:run
```

**Backend will be available at**: http://localhost:8080

**Verify it's running**:
```bash
curl http://localhost:8080/api/public/categories
```

### 2. Start Frontend

Open a new terminal:

```bash
cd client

# Install dependencies (if not done)
npm install

# Start development server
npm run dev
```

**Frontend will be available at**: http://localhost:5173

### 3. Verify Full Stack

1. Open browser: http://localhost:5173
2. Should see NIVELLE homepage
3. Backend console should show no errors
4. Firebase console should show no errors

---

## Testing

### Test Flow 1: Admin User Creation (Automatic)

The backend automatically creates an admin user on startup:

- **Email**: `admin@nivelle.com`
- **Password**: `admin123`

### Test Flow 2: Category Management

1. **Login as Admin**
   ```bash
   curl -X POST http://localhost:8080/api/public/login \
     -H "Content-Type: application/json" \
     -d '{"email":"admin@nivelle.com","password":"admin123"}'
   ```

2. **Create Category** (use token from step 1)
   ```bash
   curl -X POST http://localhost:8080/api/admin/categories \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer YOUR_TOKEN" \
     -d '{"name":"Living Room","description":"Modern living room furniture"}'
   ```

3. **Verify productCount = 0**
   ```bash
   curl http://localhost:8080/api/public/categories
   ```

### Test Flow 3: Product Management

1. **Add Product to Category**
   ```bash
   curl -X POST http://localhost:8080/api/admin/products \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer YOUR_TOKEN" \
     -d '{
       "name":"Modern Sofa",
       "description":"Comfortable 3-seater sofa",
       "price":1200,
       "categoryId":"CATEGORY_ID",
       "stock":5
     }'
   ```

2. **Verify productCount incremented**
   ```bash
   curl http://localhost:8080/api/public/categories
   ```

3. **Get Products by Category**
   ```bash
   curl http://localhost:8080/api/public/products/category/CATEGORY_ID
   ```

4. **Delete Product**
   ```bash
   curl -X DELETE http://localhost:8080/api/admin/products/PRODUCT_ID \
     -H "Authorization: Bearer YOUR_TOKEN"
   ```

5. **Verify productCount decremented**
   ```bash
   curl http://localhost:8080/api/public/categories
   ```

---

## Troubleshooting

### Error 1: Port Already in Use

**Problem**: `Port 8080 is already in use`

**Solution**:
```bash
# Find process using port 8080
lsof -i :8080  # Mac/Linux
netstat -ano | findstr :8080  # Windows

# Kill process or change port in application.properties
server.port=8081
```

### Error 2: CORS Blocked

**Problem**: `Access to XMLHttpRequest has been blocked by CORS policy`

**Solution**:
1. Verify backend CORS config in `CorsConfig.java`
2. Ensure frontend URL matches: `http://localhost:5173`
3. Clear browser cache and restart both servers

### Error 3: FirebaseApp Already Exists

**Problem**: `FirebaseApp name [DEFAULT] already exists!`

**Solution**:
- This is handled in `FirebaseConfig.java` with existence check
- If still occurs, restart the backend application

### Error 4: Service Account Not Found

**Problem**: `ClassPathResource [firebase/serviceAccountKey.json] cannot be resolved`

**Solution**:
```bash
# Verify file exists
ls server/nivelle/src/main/resources/firebase/serviceAccountKey.json

# If missing, re-download from Firebase Console and place correctly
```

### Error 5: Invalid JWT Token

**Problem**: `JWT signature does not match`

**Solution**:
1. Clear browser localStorage
2. Re-login to get new token
3. Check JWT secret in `application.properties`

### Error 6: 401 Unauthorized

**Problem**: Request rejected with 401

**Solution**:
1. Check if token is present in request header
2. Verify token hasn't expired
3. Re-login if necessary

### Error 7: 403 Forbidden

**Problem**: Access denied to admin endpoints

**Solution**:
1. Verify user has ADMIN role
2. Check role claim in JWT token
3. Ensure `@PreAuthorize` annotation is correct

### Error 8: Firestore Permission Denied

**Problem**: `PERMISSION_DENIED: Missing or insufficient permissions`

**Solution**:
1. Verify service account has Firestore access
2. Check Firebase project settings
3. Verify rules allow read/write (default production mode allows admin SDK)

### Error 9: Build Failure

**Problem**: Maven build fails

**Solution**:
```bash
# Clean and rebuild
cd server/nivelle
mvn clean install -U

# Skip tests if needed
mvn clean install -DskipTests
```

---

## Firebase Free-Tier Limitations

### Spark Plan (Free)

| Resource | Limit |
|----------|-------|
| Firestore Stored Data | 1 GB total |
| Firestore Document Reads | 50,000/day |
| Firestore Document Writes | 20,000/day |
| Firestore Document Deletes | 20,000/day |
| Network Egress | 10 GB/month |

### When to Upgrade

- **Blaze Plan** (Pay-as-you-go) when:
  - Exceeding daily read/write limits
  - Need more than 1GB storage
  - Production traffic increases

---

## Production Deployment Checklist

### Security

- [ ] Change JWT secret to strong random string
- [ ] Enable HTTPS on frontend and backend
- [ ] Set up CORS with specific production URLs only
- [ ] Remove test data and admin credentials
- [ ] Enable Firebase App Check
- [ ] Set up Firebase Security Rules

### Configuration

- [ ] Update `application.properties` for production
- [ ] Set environment variables for sensitive data
- [ ] Configure logging levels (reduce DEBUG)
- [ ] Set up monitoring and alerting

### Build

- [ ] Run full test suite: `mvn test`
- [ ] Build production JAR: `mvn clean package`
- [ ] Build frontend: `npm run build`
- [ ] Verify no development dependencies in production

### Database

- [ ] Verify Firestore indexes
- [ ] Set up backup strategy
- [ ] Monitor usage quotas
- [ ] Configure alerts for quota limits

---

## API Endpoints Reference

### Public Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/public/register | Register new user |
| POST | /api/public/login | User login |
| GET | /api/public/categories | List all categories |
| GET | /api/public/categories/{id} | Get category by ID |
| GET | /api/public/products | List all products |
| GET | /api/public/products/category/{id} | Get products by category |
| GET | /api/public/products/{id} | Get product by ID |

### Admin Endpoints (Requires ADMIN role)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/admin/categories | Create category |
| PUT | /api/admin/categories/{id} | Update category |
| DELETE | /api/admin/categories/{id} | Delete category |
| POST | /api/admin/products | Create product |
| PUT | /api/admin/products/{id} | Update product |
| DELETE | /api/admin/products/{id} | Delete product |

---

## Data Consistency Rules

### Automatic Enforcement

1. **productCount** is automatically maintained
2. **Creating product** → increments category.productCount
3. **Deleting product** → decrements category.productCount
4. **Changing category** → updates both old and new category counts
5. **productCount never negative** - enforced in service layer

### Manual Verification

```bash
# Check consistency
curl http://localhost:8080/api/public/categories | jq '.data[].productCount'
```

---

## Support & Resources

### Documentation

- Spring Boot: https://spring.io/projects/spring-boot
- Firebase Admin SDK: https://firebase.google.com/docs/admin/setup
- Firestore: https://firebase.google.com/docs/firestore
- JWT: https://jwt.io/introduction

### Getting Help

1. Check this troubleshooting guide
2. Review application logs
3. Check Firebase Console for errors
4. Verify all configuration files

---

**Version**: 1.0.0  
**Last Updated**: 2024  
**Status**: Production Ready
