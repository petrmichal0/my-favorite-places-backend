## Project Title and Description
My Favorite Places Backend is a server-side application that provides location services such as fetching geocoded addresses and generating map previews based on latitude and longitude. The backend API communicates with Google Maps API to fetch location data for the frontend application.

## Badges
![Static Badge](https://img.shields.io/badge/status-online-brightgreen)

## Quick Look
<img src="https://github.com/user-attachments/assets/dec7723e-eb8e-4c78-92ab-25e2dd13fcf5" width="300" alt="My Favorite Places Backend">

## Table of Content
- [Project Title and Description](#project-title-and-description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Backend Information](#backend-information)
- [Frontend Information](#frontend-information)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Third-Party Libraries](#third-party-libraries)
- [License](#license)

## Features
- Fetch address based on latitude and longitude using Google Maps API.
- Generate static map preview images for a given location.
- CORS-enabled for seamless communication with the frontend application.

## Installation

### Prerequisites
- Node.js (v18.x or higher)
- npm (v8.x or higher)

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/petrmichal0/my-favorite-places-backend.git
    ```

2. Navigate to the project directory:
    ```bash
    cd my-favorite-places-backend
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

### Set up Environment Variables

To run this application, you'll need to set up the following environment variables. Follow these steps:

1. **Create a `.env` file:**  
   In the root directory of your project, create a file named `.env`.

2. **Define the required environment variables:**  
   Add the following variables to your `.env` file. Replace the placeholder values with your actual Google Maps API key.

   ```env
   PORT=3000
   GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

3. **Obtain a Google Maps API Key:**  
   To get your API key, follow these steps:
   
   * Go to the [Google Cloud Console](https://console.cloud.google.com/).
   * Create or select a project.
   * Navigate to **APIs & Services** > **Credentials** and create a new API key.
   * Enable the **Geocoding API** and **Maps Static API** from the API Library.

4. **Secure your environment variables:**  
   Ensure your `.env` file is included in your `.gitignore` file to avoid exposing sensitive data.

## Usage

To start the backend server, run the following command:

```bash
npm start
```

The server will run on the specified port (default is 3000). You can access the API endpoints through [http://localhost:3000](http://localhost:3000).

### API Endpoints

| HTTP Method | Endpoint      | Description                                 | Request Example                             | Response Example                            | Authorization Required |
|-------------|---------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|------------------------|
| GET         | /geocode      | Fetch address from latitude and longitude   | http://localhost:3000/geocode?lat=37.422&lng=-122.084 | `{ "results": [...], "status": "OK" }`       | No                     |
| GET         | /map-preview  | Generate static map preview for a location  | http://localhost:3000/map-preview?lat=37.422&lng=-122.084 | `{ "imagePreviewUrl": "https://maps.googleapis.com/maps/api/staticmap?..." }` | No                     |

## Backend Information

The backend for this project is hosted at the following URL:

- **Backend API:** https://my-favorite-places-backend-2c1cd3b2e4af.herokuapp.com/

All API endpoints and detailed documentation on how to interact with the backend are provided in this README.

## Frontend Information

The frontend for this project is hosted at the following URL:

- **Frontend Application:** [https://snack.expo.dev/@petrmichal0/my-favorite-places-frontend?platform=android/](https://snack.expo.dev/@petrmichal0/my-favorite-places-frontend?platform=android/)

You can access and interact with the application directly through this link. The frontend is designed to work seamlessly with the backend API.

- **Frontend Repository:** [https://github.com/petrmichal0/my-favorite-places-frontend](https://github.com/petrmichal0/my-favorite-places-frontend)

### Project Structure

```css
My-Favorite-Places-Backend/
├── node_modules/
├── .gitignore
├── .env
├── index.js
├── package-lock.json
├── package.json
```

### Technologies Used

[![Node.js Badge](https://img.shields.io/badge/-Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](#) 
[![Express Badge](https://img.shields.io/badge/-Express-000000?style=for-the-badge&logo=express&logoColor=white)](#)

### Third-Party Libraries

- **Express.js**: Fast, minimalist web framework for Node.js.
- **Axios**: For making HTTP requests to the Google Maps API.
- **dotenv**: For securely managing environment variables.
- **CORS**: Middleware for enabling cross-origin resource sharing.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the LICENSE file for details.
