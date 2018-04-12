import { GraphQLClient  } from 'graphql-request'


var api_url = 'https://api.kafa.io/graphql/';
if (window.location.hostname === 'localhost') {
  api_url = 'http://localhost:3000/graphql/';
}

var tokenData = '';
try {
  let tokenData = localStorage.getItem('token')
  if(!tokenData)
    tokenData = '';
} catch(e) {tokenData = '';}



const TokenClient = new GraphQLClient(api_url + 'token', {
  headers: {

  },
})

const RolesClient = new GraphQLClient(api_url + 'roles', {
  headers: {
    Authorization: 'Bearer ' + tokenData
  },
})

const KafasClient = new GraphQLClient(api_url + 'kafas', {
  headers: {
    Authorization: 'Bearer ' + tokenData
  },
})

const TorrentsClient = new GraphQLClient(api_url + 'torrents', {
  headers: {
    Authorization: 'Bearer ' + tokenData
  },
})

const UsersClient = new GraphQLClient(api_url + 'users', {
  headers: {
    Authorization: 'Bearer ' + tokenData
  },
})

export { TokenClient, RolesClient, KafasClient, TorrentsClient, UsersClient };
