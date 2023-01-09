
import ActiveUserItem from "./ActiveUserItem";
import UseActiveUsers from "./hooks/UseActiveUsers";

const ActiveUsersList = () => {
    const {users} = UseActiveUsers();

    return (
      <ul>
        {users.map(user => 
          <ActiveUserItem key={user.id} user = {user}/>
        )}
      </ul>    
    )
  }
  export default ActiveUsersList