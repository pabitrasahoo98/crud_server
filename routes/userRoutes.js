const express=require("express");
const { createUser, updateUser, deleteUser, getUserDetails, getAllUsers } = require("../controllers/userController");

const router =express.Router();
router.route("/users").get(getAllUsers);

router.route("/users/new").post(createUser);
router.route("/userid/:id").put(updateUser)
.delete(deleteUser).get(getUserDetails);
module.exports=router