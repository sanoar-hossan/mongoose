import { Order, User } from "./user.interface";
import { userModel } from "./user.model";

const createUserIntoDB= async (user:User)=>{


  const result=  await userModel.create(user)
    return result;
}


const getAllUsersFromDB=async ()=>{
  const result=await userModel.find();
  return result;
}


const getSingleUsersFromDB=async (id:string)=>{
  const result=await userModel.findOne({ userId: id });
  return result;
}

//update user
const updateUsersFromDB = async(id:string,userData: User)=>{
   // Check if the user exists
  

  
    // Update user data
    const result = await userModel.findOneAndUpdate({userId:id},userData,{
      new:true,
      runValidators:true,
    });
    return result;
}



  //delete user
  const deleteUserFromDB= async (id:string) => {

   const result=await userModel.findOneAndDelete({userId:id})
   return result
  }


//OrderServices

const addProductToOrder=async (id: string,orderData: Order) => {
  const result = await userModel.findOne({ userId :id});
  

  if (result) {
    if (result.orders) {
      result.orders.push(orderData);
    } else {
      result.orders = [orderData];
    }

    await result.save(); 
    return result;
  } else {
    throw new Error('User not found');
  }

};


//get all order
const getAllOrdersForUser = async (userId: string) => {
  const result = await userModel.findOne({ userId: userId });
  if (result) {
    const orders = result.orders || [];
    return orders;
  }
}

//calculate price total
const calculateTotalPriceForUser = async (userId: string) => {

  const result= await userModel.findOne({ userId: userId });
  if (result) {
    const orders = result.orders || [];
    const totalPrice = orders.reduce((acc, order) => acc + order.price * order.quantity, 0);
    return totalPrice;
  }
}




export const UserServices={
    createUserIntoDB,
    getAllUsersFromDB,
    getSingleUsersFromDB,
    updateUsersFromDB,
    deleteUserFromDB,
    addProductToOrder,
    getAllOrdersForUser,
    calculateTotalPriceForUser ,
}