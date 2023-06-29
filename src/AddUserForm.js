import React, {useState} from "react"
import { gql, useMutation } from "@apollo/client";

/** Renders AddUserForm
 *
 * Props:
 *    -onSubmit: function to call in passsed from parent
 *
 *
 * States:
 *    -formData: data of the form {username, firstName, lastName}
 *
 *
 * UserList -> AddUserForm
 */
const ADD_USER = gql`
  mutation CreateUser(
    $username: ID!,
    $first_name: String!,
    $last_name:String!) {
      createUser(
        username:$username,
        first_name:$first_name,
        last_name:$last_name) {
          username
          first_name
          last_name
          messages {
            id
            body
          }
    }
  }
  `

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

function AddUserForm({onSubmit}) {
  const initialFormInput = {
    username: "",
    firstName: "",
    lastName: ""
  };

  const [addUser, {data, loading, error}] = useMutation(ADD_USER, {
    refetchQueries: [
      { query: GET_USERS }
    ]
  });

  const [formData, setFormData] = useState(initialFormInput);

  /** Update form input */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  /** Submit form: call function from parent & clear inputs. */
  async function handleSubmit(evt) {
    console.log("formData", formData);
    evt.preventDefault();
    try {
      addUser({variables: {
        username: formData.username,
        first_name: formData.firstName,
        last_name: formData.lastName}});
      console.log("mutationData", data);
      setFormData(initialFormInput);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="AddUserForm">
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="username">Username </label>
          <input
            className="form-control w-100"
            id="username"
            onChange={handleChange}
            name="username"
            value={formData.username}
            placeholder="username"
          />
        </div>

        <div>
        <label htmlFor="firstName">First Name </label>
          <textarea
            className="form-control w-100"
            id="firstName"
            type="firstName"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
            placeholder="first name"
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name </label>
          <input
            className="form-control w-100"
            id="lastName"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
            placeholder="last name"
          />
        </div>

        <button className="AddUserForm-submitBtn btn btn-warning">Add User</button>
      </form>
    </div>
  );

}

export default AddUserForm
