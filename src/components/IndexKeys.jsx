import { useState } from "react"

const IndexKeys = () => {
  const [friends, setFriends] = useState([
    "Yuvaraja",
    "Nivas",
    "Santhosh",
    "Logu"
  ]);
   
const addNewFriends = (e) => {
    e.preventDefault();
    const newName = e.target.newFriend.value.trim();
    if (newName) 
    setFriends([newName, ...friends]);
    e.target.reset();
  };

    const removeFriend=(removeIndex)=>{
    const filterFriends=friends.filter((friend,index)=> index !== removeIndex );
    setFriends(filterFriends)
  
  }
  return (
    <>
     <h1>Index as Key</h1>
      <form onSubmit={addNewFriends}>
            <input type="text" name="newFriend"/>
            <button type="submit">Add friend </button>
      </form>
     
          {friends.map((friend,index)=>(
            <>
                <li key={index} style={{margin:"3px"}}> Name : {friend} <br /> Position : {index} </li>
                 <button style={{margin: "3px"}} onClick={() => removeFriend(index) }>remove</button>
                 </>
            ))}
    </>
  )
}

export default IndexKeys


