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

---

## API004 — Delete an Existing Post

- **Test Objective:** Verify that an existing post can be deleted.
- **HTTP Method:** DELETE
- **Endpoint:** `https://jsonplaceholder.typicode.com/posts/1`
- **Expected Status Code:** 200 OK

### Actual Result
- Status code received: 200 OK
- Response body: Empty JSON object (`{}`)
- Automated validation: 2 tests passed.

### Test Status
PASS

---

## API005 — Invalid Endpoint

- **Test Objective:** Verify that the API returns an appropriate error for an invalid endpoint.
- **HTTP Method:** GET
- **Endpoint:** `https://jsonplaceholder.typicode.com/invalid-endpoint`
- **Expected Status Code:** 404 Not Found

### Actual Result
- Status code received: 404 Not Found
- Automated validation: 1 test passed.

### Test Status
PASS

### Testing Type
Negative API Testing

### Tool Used
Postman

### Note
JSONPlaceholder simulates deletion. The original resource is not permanently removed.

### Tool Used
Postman

---

## API006 — Empty Request Body

- **Test Objective:** Check how the API handles an empty request body.
- **HTTP Method:** POST
- **Endpoint:** `https://jsonplaceholder.typicode.com/posts`
- **Request Body:** `{}`

### Expected Behaviour
A real-world API should validate required fields and return an appropriate validation error.

### Actual Result
- Status code: 201 Created
- Generated ID: 101
- Automated tests: 2 passed.

### Test Status
PASS — API behaviour matched the automated checks, but required-field validation was not enforced.

### Observation
This is a simulated API. It accepted an empty request body, highlighting a potential validation gap.

---

## API007 — Invalid Data Types

- **Test Objective:** Check how the API handles unexpected data types.
- **HTTP Method:** POST
- **Endpoint:** `https://jsonplaceholder.typicode.com/posts`

### Request Body
```json
{
  "title": 12345,
  "body": true,
  "userId": "hello"
}
```

### Expected Behaviour
A production API should validate incoming data types according to its requirements.

### Actual Result
- Status code: 201 Created
- Generated ID: Present
- Submitted values were preserved with their original data types.
- Automated tests: 3 passed.

### Test Status
PASS — Automated checks passed. However, the simulated API accepted unexpected data types without validation.

### Observation
This test highlights the importance of input validation in real-world APIs.
