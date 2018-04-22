import { UsersClient } from '../middleware/clients.js';

const usersQuery = `query users($username: String, $email: String,
  $created_at_from: String, $created_at_to: String, $updated_at_from: String,
  $updated_at_to: String, $limit: Int, $skip: Int, $sort_field: String,
  $sort_type: String) {
  users(username: $username,email: $email,created_at_from: $created_at_from,
    created_at_to: $created_at_to, updated_at_from: $updated_at_from,
    updated_at_to: $updated_at_to, limit: $limit, skip: $skip,
    sort_field: $sort_field, sort_type: $sort_type) {
      id
      username
      email
      about
      birthday
      created_at
  }
}`

const userByIdQuery = `query userById($id: String!) {
  userById(id: $id) {
    id
    username
    email
    about
    role{
      type
    }
    birthday
    created_at
  }
}`

const userByUsernameQuery = `query userByUsername($username: String!) {
  userByUsername(username: $username) {
    id
    username
    email
    about
    role{
      type
    }
    birthday
    created_at
  }
}`

const userByEmailQuery = `query userByEmail($email: String!) {
  userByEmail(email: $email) {
    id
    username
    email
    about
    role{
      type
    }
    birthday
    created_at
  }
}`

const updateUserMutation = `mutation updateUser($id: String!, $username: String,
  $email: String, $password: String, $birthday: String){
  updateUser(id: $id, input: {
    username: $username,
    email: $email,
    password: $password,
    birthday: $birthday
  }) {
    id
    username
    email
    about
    birthday
    created_at
  }
}
`

const deleteUserMutation = `mutation deleteUser($id: String!){
  deleteUser(
    id: $id
  ) {
    id
  }
}
`

var Users = function (variables) {
  return UsersClient.request(usersQuery, variables);
}

var UserById = function (variables) {
  return UsersClient.request(userByIdQuery, variables);
}

var UserByUsername = function (variables) {
  return UsersClient.request(userByUsernameQuery, variables);
}

var UserByEmail = function (variables) {
  return UsersClient.request(userByEmailQuery, variables);
}

var UpdateUser = function (variables) {
  return UsersClient.request(updateUserMutation, variables);
}

var DeleteUser = function (variables) {
  return UsersClient.request(deleteUserMutation, variables);
}

export { UserById, UserByUsername, UserByEmail, UpdateUser, DeleteUser };
