# Postman Automated API Tests

## API001 — Get Single Post

**Method:** GET

**Endpoint:** https://jsonplaceholder.typicode.com/posts/1

### Test Script

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response contains all required fields", function () {
    const data = pm.response.json();

    pm.expect(data).to.have.property("userId");
    pm.expect(data).to.have.property("id");
    pm.expect(data).to.have.property("title");
    pm.expect(data).to.have.property("body");
});
```

### Execution Results

- Status code validation: PASS
- Required fields validation: PASS
- Total tests: 2
- Passed: 2
- Failed: 0

**Tool:** Postman
