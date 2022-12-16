import { useState } from "react";

function UserInfo() {

  const [user, setUser] = useState({
    Name: "Joelyn Ladores",
    Email: "joelyn-group3@gmail.com",
    Bio: "What's up!",
  });

  return (
    <div className="m-3 p-2 border border-1 rounded-2 text-smaller">
      <h5>Name: {user.Name}</h5>
      <h5 className="text-smaller">Email: {user.Email}</h5>
      <p>Bio: {user.Bio}</p>
    </div>
  );
}

export default UserInfo;
