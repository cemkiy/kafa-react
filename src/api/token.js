import { TokenClient  } from '../middleware/clients.js';
import { MutationRequest } from '../middleware/graphql.js';


var CreateToken = function (input, returnedSchema) {
	if (input['usernameOrEmail'].indexOf('@') === -1) {
    input['username'] = input['usernameOrEmail'];
  }else {
    input['email'] = input['usernameOrEmail'];
  }
  delete input.usernameOrEmail;
  let variables = {'input': input};
  let createTokenMutation = MutationRequest('createToken', variables, returnedSchema);
  return TokenClient.request(createTokenMutation);
}

var CreateUser = function (input, returnedSchema) {
  input['birthday'] = new Date(input['birthday']).toString();
  let variables = {'input': input};
  let createUserMutation = MutationRequest('createUser', variables, returnedSchema);
  return TokenClient.request(createUserMutation);
}

export { CreateToken, CreateUser };
