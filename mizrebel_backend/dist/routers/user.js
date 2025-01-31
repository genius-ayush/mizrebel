"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// get user details (admin only or authenticated user)
router.get("/users/:id", (req, res) => {
});
// update user details 
router.post("/users/:id", (req, res) => {
});
exports.default = router;
