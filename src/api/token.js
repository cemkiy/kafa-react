import { GraphQLClient  } from 'graphql-request'

const client = new GraphQLClient('http://localhost:3000/graphql/token', {
  headers: {

  },
})

const createTokenMutation = `mutation createToken($username: String, $email: String, $password: String!){
  createToken(input: {username: $username, email: $email, password: $password}) {
      token
      user{
        id
        username
        email
      }
    }
  }
`

const createUserMutation = `mutation createUser($username: String!, $email: String!, $password: String!, $birthday: String!){
  createUser(input: {
    username: $username,
    email: $email,
    password: $password,
    birthday: $birthday
  }) {
    id
    username
  }
}
`

var CreateToken = function (variables) {
	if (variables['usernameOrEmail'].indexOf('@') === -1) {
    variables['username'] = variables['usernameOrEmail'];
  }else {
    variables['email'] = variables['usernameOrEmail'];
  }
  delete variables.usernameOrEmail;
  return client.request(createTokenMutation, variables);
}

var CreateUser = function (variables) {
  variables['birthday'] = new Date(variables['birthday']);
  return client.request(createUserMutation, variables);
}

export { CreateToken, CreateUser };