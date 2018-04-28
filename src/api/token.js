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

var VerifyUser = function (email_verification_key, returnedSchema) {
  let variables = {'email_verification_key': email_verification_key};
  let verifyUserMutation = MutationRequest('verifyUser', variables, returnedSchema);
  return TokenClient.request(verifyUserMutation);
}

var ForgotPass = function (email, returnedSchema) {
  let variables = {'email': email};
  let forgotPassMutation = MutationRequest('forgotPass', variables, returnedSchema);
  return TokenClient.request(forgotPassMutation);
}

var ForgotPassComplete = function (forgot_password_token, input, returnedSchema) {
  let variables = {'forgot_password_token': forgot_password_token, 'input': input};
  let forgotPassMutation = MutationRequest('forgotPassComplete', variables, returnedSchema);
  return TokenClient.request(forgotPassMutation);
}

export { CreateToken, CreateUser, VerifyUser, ForgotPass, ForgotPassComplete };
