import UserCard from "./UserCard"
import { gql, useQuery } from "@apollo/client";

/** Renders UserList
 *
 * Props:
 *
 *
 * States:
 *
 *
 * Home -> UserList -> UserCard && AddMessageForm
 */
const GET_USERS = gql`
  query User {
    users {
      username
      first_name
      last_name
      messages {
        id
        body
      }
    }
  }
`;
function UserList() {
  const {data, loading, error} = useQuery(GET_USERS);
  const users = [...data.users];
  console.log("ListData", users);

  if (loading) return <h3>...Loading</h3>
  return (
    <div className="UserList">
      {users.map(user =>
          <UserCard user={user}/>
        )}
    </div>
  )
  // return (
  //   <div className="UserList">
  //     {data.users.map((user) => (
  //       <div key={user.username}>
  //         <h3>{user.first_name} {user.last_name}</h3>
  //         <ul>
  //           {user.messages.map((message) => (
  //             <li key={message.id}>{message.body}</li>
  //           ))}
  //         </ul>
  //       </div>
  //     ))}
  //   </div>
  // )
}

export default UserList
