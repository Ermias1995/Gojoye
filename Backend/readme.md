# Update Notification

## Attention Backend Team

Please ensure to update the `README.md` file with details of any new API endpoints you implement. This will help the frontend team to work simultaneously and stay in sync with the backend developments.

### What to Include:

- Endpoint URL
- HTTP Method (GET, POST, PUT, DELETE, etc.)
- Request Parameters
- Response Format
- Any Authentication/Authorization requirements

Thank you for your cooperation!

# Preparation

- Make sure to add environments variables with the following format:
  ```
      MONGODB_URL = 'mongodb://127.0.0.1:27017/gojoye' or
      MONGODB_URL = '{your url to the mongodb database}'
      JWTKEY = '{your preferred random strong key}'
      OTP_EMAIL = '{your email used to send OTP to users' emails}'
      OTP_EMAIL_PASSWORD = '{your password (app password) for your email}'
  ```

# Endpoints

- ## For sign up

  ```
      POST /auth/register
  ```

  ### request parameters:

  - Body:
    ```
        {
            "username": "",
            "password": "",
            "email": "",
            "userType": "",
            "securityQuestion": "",
            "securityAnswer": ""
        }

    ```

  ### response format:

        ```
            {
                "message": "Account Created Successfully!",
                "otherUserInfo": {
                    "username": "",
                    "email": "",
                    "userType": "",
                    "securityQuestion": "",
                    "securityAnswer": "",
                    "_id": "",
                    "createdAt": "",
                    "updatedAt": "",
                    "__v": 0
                }
            }
        ```

- ## For sign in

  ```
      POST /auth/login
  ```

  ### request parameters:

  - Body:
    ```
        {
            "email": "",
            "password": ""
        }

    ```

  ### response format:

        ```
            {
                "message": "Log In Successful!",
                "accessToken": ""
            }
        ```

- ## For update profile

  ```
      PUT /auth/updateprofile
  ```

  ### request parameters:

  - Headers:

    ```

        "token": "bearer {received token}"


    ```

  - Body:
    ```
        {
            "_id": "{recieved id}",
            "username": "",
            "email": "",
            "userType": "",
            "securityQuestion": "",
            "securityAnswer": ""
        }

    ```

  ### response format:

        ```
            {
                "message": "Update Successful!"
            }
        ```

- ## For change password

  ```
      PUT auth/forgot-password
  ```

  ### request parameters:

  - Body:
    ```
        {
            "email": ""
        }

    ```

  ### response format:

        ```
            This endpoint does not have any responses. It will send OTP to the provided email which will then be used to verify for later routes.
        ```

- ## For getting the security question

  ```
      PUT auth/reset-password
  ```

  ### request parameters:

  - Body:
    ```
        {
            "email": "",
            "otp": "",
            "newPassword": ""
        }

    ```

  ### response format:

        ```
            {
                "message": "Password reset successfully"
            }
        ```
## Review Endpoints

### Add a Review
**POST** /review

```json
Headers: {
  "Authorization": "Bearer <token>"
}

Body Parameters: {
  "property": "string (required)",
  "user": "string (required)",
  "rating": "number (required)",
  "comment": "string (optional)"
}

Response:
201 Created: {
  "message": "Review added successfully"
}

400 Bad Request: {
  "error": "User has already reviewed the property"
}

404 Not Found: {
  "error": "Property not found"
}
```

### Get Reviews for a Property
**GET** /review/:propertyId

```json
Parameters: {
  "propertyId": "string (required)"
}

Response:
200 OK: [
  {
    "user": "string",
    "rating": "number",
    "comment": "string",
    "date": "string"
  }
]

404 Not Found: {
  "error": "No reviews found for the property"
}
```

### Update a Review
**PUT** /review/:id

```json
Headers: {
  "Authorization": "Bearer <token>"
}

Body Parameters: {
  "rating": "number (optional)",
  "comment": "string (optional)"
}

Response:
200 OK: {
  "message": "Review updated successfully"
}

403 Forbidden: {
  "error": "User is not authorized to update this review"
}

404 Not Found: {
  "error": "Review not found"
}
```

### Delete a Review
**DELETE** /review/:id

```json
Headers: {
  "Authorization": "Bearer <token>"
}

Response:
200 OK: {
  "message": "Review deleted successfully"
}

403 Forbidden: {
  "error": "User is not authorized to delete this review"
}

404 Not Found: {
  "error": "Review not found"
}
```

---

## Property Endpoints

### Add a Property
**POST** /property/add

```json
Headers: {
  "Authorization": "Bearer <token>"
}

Body Parameters: {
  "propertyDetails": "object"
}

Response:
201 Created: {
  "message": "Property added successfully"
}
```

### Update a Property
**PUT** /property/:id

```json
Headers: {
  "Authorization": "Bearer <token>"
}

Body Parameters: {
  "updatedDetails": "object"
}

Response:
200 OK: {
  "message": "Property updated successfully"
}

404 Not Found: {
  "error": "Property not found"
}
```

### Delete a Property
**DELETE** /property/:id

```json
Headers: {
  "Authorization": "Bearer <token>"
}

Response:
200 OK: {
  "message": "Property deleted successfully"
}

404 Not Found: {
  "error": "Property not found"
}
```

### Get a Property
**GET** /property/:id

```json
Response:
200 OK: {
  "propertyDetails": "object"
}

404 Not Found: {
  "error": "Property not found"
}
```

### Get All Properties
**GET** /property

```json
Response:
200 OK: [
  {
    "propertyDetails": "object"
  }
]
```

### Search Properties
**GET** /property/search

```json
Query Parameters: {
  "minPrice": "number",
  "maxPrice": "number",
  "location": "string",
  "bedrooms": "number",
  "bathrooms": "number",
  "propertyType": "string"
}

Response:
200 OK: [
  {
    "propertyDetails": "object"
  }
]

404 Not Found: {
  "error": "No property matches the criteria"
}
```

---

## Inquiry Endpoints

### Add an Inquiry
**POST** /inquiry

```json
Headers: {
  "Authorization": "Bearer <token>"
}

Body Parameters: {
  "inquiryDetails": "object"
}

Response:
201 Created: {
  "message": "Inquiry sent successfully"
}
```

### Get Inquiries for a Landlord
**GET** /inquiry/:landlordId

```json
Headers: {
  "Authorization": "Bearer <token>"
}

Response:
200 OK: [
  {
    "inquiryDetails": "object"
  }
]
```

---

## Checkout Endpoints

### Start Checkout
**POST** /checkout/:propertyId

```json
Headers: {
  "Authorization": "Bearer <token>"
}

Body Parameters: {
  "moveInDate": "date (required for rentals)",
  "rentalDuration": "number (required for rentals)",
  "buyerInfo": {
    "fullName": "string",
    "contact": "string"
  },
  "paymentMethod": "string (required)"
}

Response:
201 Created: {
  "message": "Booking successful"
}

400 Bad Request: {
  "error": "Missing required fields"
}

404 Not Found: {
  "error": "Property not found"
}
```

### Make a Payment
**POST** /checkout/payment

```json
Headers: {
  "Authorization": "Bearer <token>"
}

Body Parameters: {
  "amount": "number (required)"
}

Response:
200 OK: {
  "clientSecret": "string"
}
```

### Confirm Payment
**PUT** /checkout/confirm/:id

```json
Headers: {
  "Authorization": "Bearer <token>"
}

Response:
200 OK: {
  "message": "Payment confirmed"
}

404 Not Found: {
  "error": "Booking not found"
}