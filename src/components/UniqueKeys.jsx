import { useState } from "react";
const UniqueKeys = () => {
  const [friends, setFriends] = useState([
    { id: 1, name: "Yuvaraja" },
    { id: 2, name: "Nivas" },
    { id: 3, name: "Santhosh" }, 
    { id: 4, name: "Logu" },
  ]);

  const addNewFriends = (e) => {
    e.preventDefault();
    const newName = e.target.newFriend.value.trim();
    if (newName) {
      setFriends([{ id: Date.now(), name: newName }, ...friends]);
    }
    e.target.reset();
  };
  const removeFriend=(id)=>{
    const filterFriends=friends.filter((friend)=> friend.id !== id );
    console.log(filterFriends);
    
    setFriends(filterFriends)
  }
  return (
    <>
     <h1>ID as Key</h1>
      <form onSubmit={addNewFriends}>
        <input type="text" name="newFriend" />
        <button type="submit">Add friend </button>
      </form>
      
      {friends.map((friend,index) => (
        <>
        <li key={friend.id} style={{margin: "3px"}}>ID : {friend.id} <br /> Position : {index} <br /> Name : {friend.name}</li>
        <button style={{margin: "3px"}} onClick={() => removeFriend(friend.id) }>remove</button>
        </>
      ))}
    </>
  );
};

export default UniqueKeys;

