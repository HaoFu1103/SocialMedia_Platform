// const express = require("express");
const koa = require('koa');
const koaJwt = require('koa-jwt');
const router = require('koa-router')();
const users = require("../controllers/user");
const jwt = require('../middleware/jwt');
    // userById,
    // allUsers,
    // getCurrentUser,
    // updateUser,
    // deleteUser,
    // userPhoto,
    // addFollowing,
    // addFollower,
    // removeFollowing,
    // removeFollower,
    // findPeople,
    // hasAuthorization,
    // editInterests,
    // recommend


const auth = require("../controllers/auth");

// test
router.get("/new", (ctx, next) => {
    ctx.body = "new";
});


router.put("/user/follow", jwt, users.addFollowing, users.addFollower);
router.put("/user/unfollow", jwt, users.removeFollowing, users.removeFollower);

router.get("/users", users.allUsers); // working
// get user profile
router.get("/user/:userId", jwt, users.getCurrentUser); // working
router.put("/user/:userId", jwt, users.hasAuthorization, users.updateUser); // in progress
router.delete("/user/:userId", jwt, users.deleteUser); // working
// router.get("/user/:userId/interests", requireSignin, hasAuthorization, editInterests);
router.get("/user/:userId/recommendation", jwt, users.recommend);

// // photo
router.get("/user/photo/:userId", users.getUserPhoto); //working 


module.exports = router;
