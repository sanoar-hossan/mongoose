import { Request, Response } from "express";
import { UserServices } from "./user.service";
import userValidationSchema from "./user.validation";


const createUser=async(req:Request, res:Response)=>{
    try{
        const user=req.body;

        //using joi
        const {error}=userValidationSchema.validate(user);
        
        //will call data
      const result=await UserServices.createUserIntoDB(user);

if(error){
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: error.details,
  });
}

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

//order controllers

 const addProduct=async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const orderData = req.body;

    const result=await UserServices.addProductToOrder(userId, orderData);

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
    console.error(error);
  } 

}

//getAllOrdersForUser
const getAllOrders=async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.getAllOrdersForUser(userId);

    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: { orders: result },
    });
  } catch (error) {
    console.error(error);
  }

}

//calculate price
const calculateTotalPrice = async (req: Request, res: Response) => {

  try {
    const { userId } = req.params;
    const totalPrice = await UserServices.calculateTotalPriceForUser(userId);

    res.status(200).json({
      success: true,
      message: 'Total price calculated successfully!',
      data: {
        totalPrice: totalPrice,
      },
    });
  } catch (error) {
    console.error(error);
  }
}
  
    

export const userControllers={
    createUser,
    getAllUsers,
    getSingleUsers,
    updateUser,
    deleteUser,
 addProduct,
 getAllOrders,
 calculateTotalPrice ,

}