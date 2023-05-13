const { Router } = require("express");
const userRouter = Router();
///////////////////////////////////////////
const {
    getUserHandler,
    getAllUsersHandler,
    postUserHandler,
} = require("../handlers/usersHandlers")
//////////////////////////////////////////
userRouter.get("/", getAllUsersHandler)
//////////////////////////////////////////
userRouter.get("/:id", getUserHandler);
//////////////////////////////////////////
userRouter.post("/", postUserHandler)
//////////////////////////////////////////


module.exports = userRouter;

// app.get("/user", (req, res, next) => {
//   res.status(200).send("route/user");
// });