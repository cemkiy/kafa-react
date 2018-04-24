import { UsersClient } from '../middleware/clients.js';
import { QueryRequest, MutationRequest } from '../middleware/graphql.js';


var Users = function (variables, returnedSchema) {
  let usersQuery = QueryRequest("users", variables, returnedSchema);
  return UsersClient.request(usersQuery);
}

var UserById = function (variables, returnedSchema) {
  let userByIdQuery = QueryRequest("userById", variables, returnedSchema)
  return UsersClient.request(userByIdQuery);
}

var UserByUsername = function (variables, returnedSchema) {
  let userByUsernameQuery = QueryRequest("userByUsername", variables, returnedSchema);
  return UsersClient.request(userByUsernameQuery);
}

var UserByEmail = function (variables, returnedSchema) {
  let userByEmailQuery = QueryRequest("userByEmail", variables, returnedSchema);
  return UsersClient.request(userByEmailQuery);
}

var UpdateUser = function (id, input, returnedSchema) {
  let variables = {'id': id, 'input': input};
  let updateUserMutation = MutationRequest("updateUser", variables, returnedSchema);
  return UsersClient.request(updateUserMutation);
}

var DeleteUser = function (id, returnedSchema) {
  let variables = {'id': id};
  let deleteUserMutation = MutationRequest("deleteUser", variables, returnedSchema);
  return UsersClient.request(deleteUserMutation);
}

export { Users, UserById, UserByUsername, UserByEmail, UpdateUser, DeleteUser };
