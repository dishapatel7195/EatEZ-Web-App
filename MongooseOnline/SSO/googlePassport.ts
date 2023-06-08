import googleAppAuth from './googleOauth2';



let passport = require('passport');
//let GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
let GoogleStrategy = require('passport-google-oauth20').Strategy;


// Creates a Passport configuration for Google
class GooglePassport {

    clientId: string;
    secretId: string;

     
    constructor() { 
        this.clientId = googleAppAuth.id;
        this.secretId = googleAppAuth.secret;
    

        passport.use(new GoogleStrategy({
                clientID: this.clientId,
                clientSecret: this.secretId,
                callbackURL: '/auth/google/callback',
            },
            (accessToken, refreshToken, profile, done) => {
                console.log("inside new password google strategy");
                process.nextTick( () => {
                    console.log(profile);
                    return done(null, profile);
                }); 
            }
        ));

        passport.serializeUser(function(user, done) {
            //console.log("In serialize user " + user);
            done(null, user);
        });

        passport.deserializeUser(function(user, done) {
            console.log("In de-serialize user " + user);
            done(null, user);
        });
    }
}
export default GooglePassport;