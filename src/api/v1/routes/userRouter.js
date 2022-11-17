const express = require("express");

const router = express.Router();

//auth
router.post("/cms/auth/signin"); //signin admin
router.post("/auth/signin"); //signin user
router.post("/auth/signup"); //signup user
router.post("/auth/google_signin"); //signin user by google

//category
router.get("/cms/category");
router.post(
    "/cms/category",
    authenticateAdmin,
    authorizeRoles[("superadmin", "admin")]
);
router.get("/cms/category/:id");
router.patch(
    "/cms/category/:id",
    authenticateAdmin,
    authorizeRoles[("superadmin", "admin")]
);
router.delete(
    "/cms/category/:id",
    authenticateAdmin,
    authorizeRoles[("superadmin", "admin")]
);

//faq
router.get("/cms/faq");
router.post(
    "/cms/faq",
    authenticateAdmin,
    authorizeRoles[("superadmin", "admin")]
);
router.get("/cms/faq/:id");
router.patch(
    "/cms/faq/:id",
    authenticateAdmin,
    authorizeRoles[("superadmin", "admin")]
);
router.delete(
    "/cms/faq/:id",
    authenticateAdmin,
    authorizeRoles[("superadmin", "admin")]
);

//admin
router.get("/cms/admin", authenticateAdmin);
router.post("/cms/admin", authenticateAdmin, authorizeRoles["superadmin"]);
router.get("/cms/admin/:id", authenticateAdmin);
router.patch(
    "/cms/admin/:id",
    authenticateAdmin,
    authorizeRoles[("superadmin", "admin")]
);
router.delete(
    "/cms/admin/:id",
    authenticateAdmin,
    authorizeRoles["superadmin"]
);
router.patch(
    "/cms/admin/active/:id",
    authenticateAdmin,
    authorizeRoles["superadmin"]
);

//thread
router.get("/thread"); //get all threads
router.post("/thread", authenticateUser); //create thread
router.get("/thread/:id"); //get thread by id
router.patch("/thread/:id", authenticateUser); //update thread
router.delete("/thread/:id", authenticateUser); //delete thread
router.get("/thread/category/:slug_category"); //get threads by slug category

//comment
router.get("/comment/:thread_id"); //get all comment from thread
router.post("/comment/:thread_id", authenticateUser); //create comment from thread
router.post("/comment/reply/:comment_id", authenticateUser); //create reply comment
router.delete("/comment/:id", authenticateUser); //delete comment
router.delete("/comment/reply/:id", authenticateUser); //delete reply

//bookmark
router.post("/bookmark/:thread_id", authenticateUser); //create and delete bookmark

//notification
router.get("/notification"); //get all notification

//vote
router.post("/vote/:thread_id", authenticateUser);

//user
router.get("/user/profile"); //get user profile
router.get("/user/threads"); //get user threads
router.get("/user/bookmarks"); //get user bookmarks
router.post("/user/profile", authenticateUser);

module.exports = router;
