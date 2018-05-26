import {GraphQLClient} from 'graphql-request'
const hostname = window && window.location && window.location.hostname

var apiURL = 'http://api.kafa.io/graphql/'
if (hostname === 'localhost') {
  apiURL = 'http://localhost:3000/graphql/'
} else if (hostname === 'kafa-react.herokuapp.com') {
  apiURL = 'https://kafa-node.herokuapp.com/graphql/'
}

var getToken = function () {
  try {
    let token = window.localStorage.getItem('token')
    if (!token) {
      return ''
    }
    return 'Bearer ' + token
  } catch (e) {
    return ''
  }
}

const TokenClient = new GraphQLClient(apiURL + 'token', {headers: {}})

const RolesClient = new GraphQLClient(apiURL + 'roles', {
  headers: {
    Authorization: getToken()
  }
})

const KafasClient = new GraphQLClient(apiURL + 'kafas', {
  headers: {
    Authorization: getToken()
  }
})

const TorrentsClient = new GraphQLClient(apiURL + 'torrents', {
  headers: {
    Authorization: getToken()
  }
})

const UsersClient = new GraphQLClient(apiURL + 'users', {
  headers: {
    Authorization: getToken()
  }
})

export {
  TokenClient,
  RolesClient,
  KafasClient,
  TorrentsClient,
  UsersClient
}
