const { Router } = require('express');
const router = Router();
const userRouter = require('./userRouter');
const postRouter = require('./postRouter');

///////////////////////////////////////////
router.use("/users", userRouter);
router.use("/post", postRouter);
module.exports = router;
