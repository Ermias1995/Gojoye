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
