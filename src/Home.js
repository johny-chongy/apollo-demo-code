
import AddUserForm from "./AddUserForm";
import UserList from "./UserList";


/** Renders Homepage
 *
 * Props:
 *
 *
 * States:
 *
 *
 * App -> Home -> UserList && AddUserForm
 */
function Home({ users }) {
  return (
    <div className="Home">
      <h1>Apollo Client Demo</h1>
      <AddUserForm />
      <UserList />
    </div>
  )
}

export default Home
