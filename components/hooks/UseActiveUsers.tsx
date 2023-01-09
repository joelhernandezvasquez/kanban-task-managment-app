import { useMemo } from "react";
import { getActiveUser } from "../helpers/getActiveUser";
import FetchUsers from "./FetchUsers"


const UseActiveUsers = () => {
    const {users} =  FetchUsers();

      const userActive =  useMemo(()=>{
         return getActiveUser(users)
      },[users])

    return {users}

}

export default UseActiveUsers