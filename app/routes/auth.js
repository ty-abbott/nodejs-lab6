var session = require("express-session")
const express = require(`express`)
const router = express.Router()
const passport = require("passport");
const { Store } = require("express-session");
const app = require("..");
const { userInfo } = require("os");
const { error } = require("console");
const { authenticate } = require("../util");

router.get(`/google`,
    passport.authenticate('google', { scope: [`https://www.googleapis.com/auth/userinfo.email`]})
)
router.get('/google/callback', passport.authenticate('google'), async (req, res) => {
    req.session.save(err => {
        if (err) {
          req.logout()
          res.sendStatus(500)
        }
        else res.redirect(process.env.CLIENT_ORIGIN)
      })
    })
router.get(`/logout`, async (req,res) => {
    req.session.destroy()
    req.logout()
    res.redirect(process.env.CLIENT_ORIGIN)
  })
  router.get('/', authenticate, (req, res, next) => {
    res.send(req.user)

});
module.exports = router