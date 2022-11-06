const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const AuthRouter = require("./src/api/v1/routes/authRouter");
const BookmarkRouter = require("./src/api/v1/routes/bookmarkRouter");
const CategoryRouter = require("./src/api/v1/routes/categoryRouter");
const CommentRouter = require("./src/api/v1/routes/commentRouter");
const FaqRouter = require("./src/api/v1/routes/faqRouter");
const NotificationRouter = require("./src/api/v1/routes/faqRouter");
const ThreadRouter = require("./src/api/v1/routes/threadRouter");
const UserRouter = require("./src/api/v1/routes/userRouter");
const VoteRouter = require("./src/api/v1/routes/voteRouter");
const errorHandlerMiddleware = require("./src/api/v1/middlewares/handle-error");
const notFoundMiddleware = require("./src/api/v1/middlewares/not-found");

const app = express();

const v1 = "/api/v1";

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(`${v1}`, AuthRouter);
app.use(`${v1}/bookmark`, BookmarkRouter);
app.use(`${v1}/category`, CategoryRouter);
app.use(`${v1}/comment`, CommentRouter);
app.use(`${v1}/faq`, FaqRouter);
app.use(`${v1}/notification`, NotificationRouter);
app.use(`${v1}/thread`, ThreadRouter);
app.use(`${v1}/user`, UserRouter);
// app.use(`${v1}/vote`, VoteRouter);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

module.exports = app;
