
type userType = {
    id:number,
    avatarUrl:string,
    fullName:string,
    role:string
}


const ActiveUserItem = (user:userType) => {
  return (
    <li key={user.id}>
    <img src={user.avatarUrl} />
    <p>{user.fullName}</p>
    <small>{user.role}</small>
  </li>
  )
}

export default ActiveUserItem