import { GraphQLClient  } from 'graphql-request'


var api_url = 'https://api.kafa.io/graphql/';
if (window.location.hostname === 'localhost') {
  api_url = 'http://localhost:3000/graphql/';
} else if (window.location.hostname === 'herokuapp') {
  api_url = 'https://kafa-react.herokuapp.com/graphql/';
}


var getToken = function () {
  try {
    let token = localStorage.getItem('token');
    if(!token)
      return '';
    return 'Bearer ' + token;
  } catch(e) {return '';}
}

const TokenClient = new GraphQLClient(api_url + 'token', {
  headers: {

  },
})

const RolesClient = new GraphQLClient(api_url + 'roles', {
  headers: {
    Authorization: getToken()
  },
})

const KafasClient = new GraphQLClient(api_url + 'kafas', {
  headers: {
    Authorization: getToken()
  },
})

const TorrentsClient = new GraphQLClient(api_url + 'torrents', {
  headers: {
    Authorization: getToken()
  },
})

const UsersClient = new GraphQLClient(api_url + 'users', {
  headers: {
    Authorization: getToken()
  },
})

export { TokenClient, RolesClient, KafasClient, TorrentsClient, UsersClient };