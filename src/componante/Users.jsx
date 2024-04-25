import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUsers = useLoaderData();
    const [users ,setUsers] = useState(loadedUsers)
    const handleDelete =id=>{
        // make sure user is confirmation to delete
        fetch(`https://coffee-store-server-sable-one.vercel.app/user/${id}`,{

        method:'DELETE'
    })
    .then(res => res.json())
    .then(data =>{
        if(data.deletedCount > 0){
            console.log('deleted successfully')
            // remove the user from the ui
            const remainingUsers = users.filter(user =>user._id !==id)
            setUsers(remainingUsers);
        }
    })
    }

    return (
        <div>
            <div>


            <h2>users :{loadedUsers.length}</h2>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Created at</th>
        <th>Last log in</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        users.map(user =>
         <tr key={user._id}>
         <th>1</th>
         <td>{user.email}</td>
         <td>{user.createdAt}</td>
         <td>{user.lastLoggedAt}</td>
         <td>
            <button onClick={ () => handleDelete(user._id)} className="btn">X</button>
         </td>
       </tr>
            )
     }
     
     
    
    
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default Users;