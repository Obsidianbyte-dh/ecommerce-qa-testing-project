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
