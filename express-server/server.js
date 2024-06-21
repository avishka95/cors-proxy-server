const express = require('express');
require('dotenv').config();
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const target = process.env.TARGET || 'http://localhost:9090';

// Use CORS middleware
app.use(cors());
// Create a proxy route
app.use('/', createProxyMiddleware({
    target,
    changeOrigin: true,
  }));

// Start the server
app.listen(port, () => {
  console.log(`CORS Proxy Server is running on http://localhost:${port}`);
  console.log(`CORS Proxy Server is forwarding requests to ${target}`);
});
