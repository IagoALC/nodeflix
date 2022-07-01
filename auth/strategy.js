import { Strategy as BearerStrategy } from 'passport-http-bearer';
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../model/User.js";

export default (passport) => {
  passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    session: false
  }, async (username, password, done) => {
    try {
      const user = await userModel.findOne({ email: username });
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }));

  passport.use(new BearerStrategy(async (token, done) => {
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      const user = await userModel.findById(payload.id);
      done(null, user);
    } catch (error) {
      return done(error);
    }
  }));
} 