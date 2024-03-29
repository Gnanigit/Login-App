import { Router } from "express";
const router = Router();

// import all controllers

import * as controller from '../controllers/appController.js'
import Auth , {localVariavles} from '../middleware/auth.js'
import {registerMail} from '../controllers/mailer.js'

// post methods -----------

// register user
router.route('/register').post((controller.register))
// send mail
router.route('/registerMail').post((registerMail));
// authenticate user
router.route('/authenticate').post(controller.verifyUser,(req,res)=>res.end());
// login app
router.route('/login').post(controller.verifyUser,controller.login);


// get methods ------------
// user eith username
router.route('/user/:username').get(controller.getUser)
// generate rendom otp
router.route('/generateOTP').get(controller.verifyUser,localVariavles,controller.generateOTP)
// verify generated otp
router.route('/VerifyOTP').get(controller.verifyUser,controller.verifyOTP)
// reset all the variables
router.route('/createResetSession').get(controller.createResetSession)


// put methods
// used to update the user profile
router.route('/updateuser').put(Auth,controller.updateUser)
// used to reset 
router.route('/resetPassword').put(controller.verifyUser,controller.resetPassword)
export default router;