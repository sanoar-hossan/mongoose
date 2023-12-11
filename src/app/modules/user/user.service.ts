import { User } from "./user.interface";
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

export const UserServices={
    createUserIntoDB,
    getAllUsersFromDB,
    getSingleUsersFromDB,
    updateUsersFromDB,
    deleteUserFromDB,
}