import { GraphQLClient  } from 'graphql-request'

const client = new GraphQLClient('http://localhost:3000/graphql/token', {
  headers: {

  },
})

const query = `mutation createToken($username: String, $email: String, $password: String!){
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

var CreateToken = function (usernameOrEmail, password) {
  const variables = {
    password: password
  }
  client.request(query, variables).then(data => console.log(data))
	if (usernameOrEmail.indexOf('@') === -1) {
    variables['username'] = usernameOrEmail;
  }else {
    variables['email'] = usernameOrEmail;
  }
}

export {CreateToken};
