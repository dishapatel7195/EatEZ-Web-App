"use strict";
exports.__esModule = true;
var googleOauth2_1 = require("./googleOauth2");
var passport = require('passport');
//let GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var GoogleStrategy = require('passport-google-oauth20').Strategy;
// Creates a Passport configuration for Google
var GooglePassport = /** @class */ (function () {
    function GooglePassport() {
        this.clientId = googleOauth2_1["default"].id;
        this.secretId = googleOauth2_1["default"].secret;
        passport.use(new GoogleStrategy({
            clientID: this.clientId,
            clientSecret: this.secretId,
            callbackURL: '/auth/google/callback'
        }, function (accessToken, refreshToken, profile, done) {
            console.log("inside new password google strategy");
            process.nextTick(function () {
                console.log(profile);
                return done(null, profile);
            });
        }));
        passport.serializeUser(function (user, done) {
            //console.log("In serialize user " + user);
            done(null, user);
        });
        passport.deserializeUser(function (user, done) {
            console.log("In de-serialize user " + user);
            done(null, user);
        });
    }
    return GooglePassport;
}());
exports["default"] = GooglePassport;
