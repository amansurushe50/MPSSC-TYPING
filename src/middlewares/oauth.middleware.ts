import passport from 'passport';
import { Strategy as GoogleStrategy, Profile } from 'passport-google-oauth2';
import { Client_ID, Client_secret } from '@config';

passport.serializeUser((user: any, done) => {
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: Client_ID as string, // Your Credentials here.
      clientSecret: Client_secret as string, // Your Credentials here.
      callbackURL: 'http://localhost:3000/auth/google/callback',
      passReqToCallback: true,
    },
    (request, accessToken, refreshToken, profile: Profile, done) => {
      return done(null, profile);
    },
  ),
);
