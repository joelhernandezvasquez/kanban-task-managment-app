import {useState,useEffect}from 'react'

const FetchUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const loadUsers = async () => {  
          const response = await fetch('/some-api')
          const data = await response.json()
          setUsers(data)
        }
        loadUsers()
      }, [])

      return {users};
}

export default FetchUsers

