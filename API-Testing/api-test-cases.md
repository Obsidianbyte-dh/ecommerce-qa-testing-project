# API Testing — Test Cases

## Project
E-commerce QA Testing Project

## API001 — Get Single Post

- **Test Objective:** Verify that the API returns a single post successfully.
- **HTTP Method:** GET
- **Endpoint:** `https://jsonplaceholder.typicode.com/posts/1`
- **Expected Status Code:** 200 OK

### Expected Response Fields
- userId
- id
- title
- body

### Actual Result
- Status code received: 200 OK
- All four required fields were present.
- Automated validation: 2 tests passed.

### Test Status
PASS

### Tool Used
Postman

---

## API002 — Create a New Post

- **Test Objective:** Verify that the API accepts data through a POST request.
- **HTTP Method:** POST
- **Endpoint:** `https://jsonplaceholder.typicode.com/posts`
- **Request Body:** JSON containing title, body and userId.
- **Expected Status Code:** 201 Created

### Actual Result
- Status code received: 201 Created
- Submitted title matched.
- Submitted body matched.
- Generated ID was present.
- Automated validation: 3 tests passed.

### Test Status
PASS

### Note
JSONPlaceholder simulates resource creation. The new post is not permanently stored.

### Tool Used
Postman

---

## API003 — Update an Existing Post

- **Test Objective:** Verify that an existing post can be updated.
- **HTTP Method:** PUT
- **Endpoint:** `https://jsonplaceholder.typicode.com/posts/1`
- **Request Body:** Updated title, body and userId.
- **Expected Status Code:** 200 OK

### Actual Result
- Status code received: 200 OK
- Updated title matched expected value.
- Updated body matched expected value.
- Automated validation: 3 tests passed.

### Test Status
PASS

### Note
JSONPlaceholder simulates updates. Changes are not permanently stored.

### Tool Used
Postman
