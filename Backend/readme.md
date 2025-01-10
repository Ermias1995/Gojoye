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
**POST** `/review`

- **Headers**: `Authorization: Bearer <token>`
- **Body Parameters**:
  - `property` (string, required): The ID of the property being reviewed.
  - `user` (string, required): The ID of the user submitting the review.
  - `rating` (number, required): The rating for the property.
  - `comment` (string, optional): The review comment.
- **Response**:
  - `201 Created`: Review added successfully.
  - `400 Bad Request`: User has already reviewed the property.
  - `404 Not Found`: Property not found.

### Get Reviews for a Property
**GET** `/review/:propertyId`

- **Parameters**:
  - `propertyId` (string, required): The ID of the property.
- **Response**:
  - `200 OK`: Array of reviews.
  - `404 Not Found`: No reviews found for the property.

### Update a Review
**PUT** `/review/:id`

- **Headers**: `Authorization: Bearer <token>`
- **Body Parameters**:
  - `rating` (number, optional): The updated rating.
  - `comment` (string, optional): The updated comment.
- **Response**:
  - `200 OK`: Review updated successfully.
  - `403 Forbidden`: User is not authorized to update this review.
  - `404 Not Found`: Review not found.

### Delete a Review
**DELETE** `/review/:id`

- **Headers**: `Authorization: Bearer <token>`
- **Response**:
  - `200 OK`: Review deleted successfully.
  - `403 Forbidden`: User is not authorized to delete this review.
  - `404 Not Found`: Review not found.

---

## Property Endpoints

### Add a Property
**POST** `/property/add`

- **Headers**: `Authorization: Bearer <token>`
- **Body Parameters**: Property details.
- **Response**:
  - `201 Created`: Property added successfully.

### Update a Property
**PUT** `/property/:id`

- **Headers**: `Authorization: Bearer <token>`
- **Body Parameters**: Updated property details.
- **Response**:
  - `200 OK`: Property updated successfully.
  - `404 Not Found`: Property not found.

### Delete a Property
**DELETE** `/property/:id`

- **Headers**: `Authorization: Bearer <token>`
- **Response**:
  - `200 OK`: Property deleted successfully.
  - `404 Not Found`: Property not found.

### Get a Property
**GET** `/property/:id`

- **Response**:
  - `200 OK`: Property details.
  - `404 Not Found`: Property not found.

### Get All property
**GET** `/property`

- **Response**:
  - `200 OK`: Array of property.

### Search property
**GET** `/property/search`

- **Query Parameters**:
  - `minPrice`, `maxPrice`, `location`, `bedrooms`, `bathrooms`, `propertyType`.
- **Response**:
  - `200 OK`: Array of matching property.
  - `404 Not Found`: No property match the criteria.

---

## Inquiry Endpoints

### Add an Inquiry
**POST** `/inquiry`

- **Headers**: `Authorization: Bearer <token>`
- **Body Parameters**: Inquiry details.
- **Response**:
  - `201 Created`: Inquiry sent successfully.

### Get inquiry for a Landlord
**GET** `/inquiry/:landlordId`

- **Headers**: `Authorization: Bearer <token>`
- **Response**:
  - `200 OK`: Array of inquiry.

---

## Checkout Endpoints

### Start Checkout
**POST** `/checkout/:propertyId`

- **Headers**: `Authorization: Bearer <token>`
- **Body Parameters**:
  - `moveInDate` (date, required for rentals): Move-in date.
  - `rentalDuration` (number, required for rentals): Duration of rental.
  - `buyerInfo` (object, required for sales): `{ fullName, contact }`.
  - `paymentMethod` (string, required): Payment method.
- **Response**:
  - `201 Created`: Booking successful.
  - `400 Bad Request`: Missing required fields.
  - `404 Not Found`: Property not found.

### Make a Payment
**POST** `/checkout/payment`

- **Headers**: `Authorization: Bearer <token>`
- **Body Parameters**:
  - `amount` (number, required): Payment amount.
- **Response**:
  - `200 OK`: `clientSecret` for Stripe payment.

### Confirm Payment
**PUT** `/checkout/confirm/:id`

- **Headers**: `Authorization: Bearer <token>`
- **Response**:
  - `200 OK`: Payment confirmed.
  - `404 Not Found`: Booking not found.
