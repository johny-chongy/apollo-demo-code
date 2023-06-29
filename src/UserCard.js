import UserDetail from "./UserDetail";
import "./UserCard.css";

/** Renders UserCard
 *
 * Props:
 *
 *
 * States:
 *
 *
 * UserList -> UserCard -> AddMessageForm
 */
function UserCard({user}) {
  console.log("user", user);
  return (
    <div className="UserCard">
      {
        <div>
          <h4>{user.username}</h4>
          <p>Name: {user.first_name} {user.last_name}</p>
          <UserDetail messages={user.messages} />
        </div>
      }
    </div>
  )
}

export default UserCard
