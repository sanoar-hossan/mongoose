import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser=async(req:Request, res:Response)=>{
    try{
        const user=req.body;
        //will call data
      const result=await UserServices.createUserIntoDB(user);
      res.status(200).json({
        success: true,
        message: 'User created successfully!',
        data: result,
      });
    }
    catch(error){
        console.log(error);
    }

}

const getAllUsers=async(req:Request,res:Response)=>{
try{
  const result= await UserServices.getAllUsersFromDB()
  res.status(200).json({
    success: true,
    message: 'Users fetched successfully!',
    data: result,
  });

}catch(error){
  console.log(error);
}

}

//get single user
const getSingleUsers=async(req:Request,res:Response)=>{
  try{
const {userId}=req.params

    const result= await UserServices.getSingleUsersFromDB(userId)
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  
  }catch(error){
    console.log(error);
  }
  
  }

  //update user
  const updateUser = async (req: Request, res: Response) => {
    try {
      const userData=req.body
      const {userId }= req.params
      
  
  
     
        // Update user data
        const result = await UserServices.updateUsersFromDB(userId,userData);
  
        
  
        res.status(200).json({
          success: true,
          message: 'User updated successfully!',
          data:result,
        });
     
    } catch (error) {
      console.error(error);
      
    }
  }
  

//delete user
const deleteUser= async (req: Request, res: Response) => {

try{
const {userId}=req.params
const result= await UserServices.deleteUserFromDB(userId)

res.status(200).json({
  success: true,
  message: 'deleted successfully!',
  data:result,
});

}
catch(error){
  console.log(error);
}
}


  
    

export const userControllers={
    createUser,
    getAllUsers,
    getSingleUsers,
    updateUser,
    deleteUser,
}