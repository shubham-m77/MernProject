const express = require("express");
const { allUsers, contactMsg, deleteUserById, getUserById, updateUserById, deleteContactById } = require("../admin-controller");
const router = express.Router();
const authMiddleware = require("../Validators/auth-middleware.js");
const adminMiddleware = require("../Validators/admin-middleware.js");

// Ensure the correct middlewares are applied to the routes
router.route("/users").get(authMiddleware, adminMiddleware, allUsers);
router.route("/users/:id").get(authMiddleware, adminMiddleware, getUserById);
router.route("/users/update/:id").patch(authMiddleware, adminMiddleware, updateUserById);
router.route("/users/delete/:id").delete(authMiddleware,adminMiddleware,deleteUserById);
router.route("/contacts").get(authMiddleware,adminMiddleware, contactMsg); // Consider adding adminMiddleware if required
router.route("/contacts/delete/:id").delete(authMiddleware,adminMiddleware,deleteContactById);

module.exports = router;
