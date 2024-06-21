# express-server (Express.js Server)

This is a basic Express.js proxy server setup that forwards requests to a target endpoint and returns its response with the required CORS headers added.

## Prerequisites

- Node.js (https://nodejs.org/)
- npm (Node Package Manager, comes with Node.js)

## Getting Started

Follow these steps to get the server up and running:

### 1. Clone the Repository

```sh
git clone https://github.com/avishka95/cors-proxy-server.git
cd cors-proxy-server/express-server
```

### 2. Install Dependencies
Make sure you are in the `/express-server` directory and run:

```sh
npm install
```

This will install all the necessary dependencies listed in package.json.

### 3. Run the Server
Start the server with the following command:

```sh
node server.js
```

By default, the server will start on port `3000` and forward requests to the endpoint `http://localhost:9090`. This can be configured by creating a `.env` file.

### Configuration
You can configure the server by setting the following environment variables:

- PORT: The port number on which the server will listen (default is `3000`).
- TARGET: The target endpoint to which requests will be forwarded (default is `http://localhost:9090`).

You can create a `.env` file in the root of the `/express-server` directory and add your environment variables there:

```sh
PORT=4000
TARGET="http://localhost:3001"
```

### Warning
This setup is not suitable for deployment in a production environment.
