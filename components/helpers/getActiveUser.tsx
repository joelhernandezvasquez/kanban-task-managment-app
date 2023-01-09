type userType = {
    id:number,
    avatarUrl:string,
    fullName:string,
    role:string
}



export const getActiveUser = (users:userType) =>{
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    
   return  users.filter(user => !user.isBanned && user.lastActivityAt >= weekAgo)
}