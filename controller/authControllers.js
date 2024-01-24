import { Schema } from 'mongoose';
import UserModel from '../model/user.js';

export const signupController = async (req, res) => {
  try {
    const { userName, userEmail, userPass } = req.body
    const user = {
      userName: userName,
      email: userEmail,
      password: userPass
    };
    const isUserExist = await UserModel.findOne({ email: userEmail })
    if (isUserExist) return res.json({
      status: false,
      message: "User is alerady exits"
    })

    const UsersModel = new UserModel(user);
    const saveUser = await UsersModel.save();
    // console.log(saveUser , "===>>> user save")
    res.json({
      status: true,
      message: 'User Sign Up Successfully'
    });
  } catch (error) {
    res.json({
      status: false,
      myMessage: 'schema error',
      message: error.message
    });
  }
};

export const loginController = async (req, res) => {
  const { userEmail, userPass } = req.body;
  const isUserExist = await UserModel.findOne({ email: userEmail })
  if (isUserExist){

    // res.json({
    //   status: false,
    //   message: 'User not found'
    // });
    // const isPasswordExist = await UserModel.findOne({ userPass: userPass })
    if(isUserExist.password === userPass){

      res.status(200).json({
        status:true,
        message:"User Login Successfully"
      })
    }else{
      res.json({
        status:false,
        message:"invalid credeintials"
      })
    }
      
  } else{

    
    res.json({
      status:false,
      message:"user not found"
    })
  }
};

export const usersController = async (req , res)=>{
  const isUserExist = await UserModel.find()
  res.json({
    users:isUserExist
  })
  console.log(isUserExist)
}