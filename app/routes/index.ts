/** Default router business */

// Import express
import express from 'express';

// Create a router instance for our nested routes.
const router = express.Router();

// Assign routes to our router
router.get('/', (req, res) => {
	res.send("Welcome to Rathma's typescript / express.js template");
});

// Export the router
export default router;