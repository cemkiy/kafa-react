import {RolesClient} from '../middleware/clients.js'
import {QueryRequest} from '../middleware/graphql.js'

var RoleByUserId = function (variables, returnedSchema) {
  let roleByUserIdQuery = QueryRequest('roleByUserId', variables, returnedSchema)
  return RolesClient.request(roleByUserIdQuery)
}

export {
  RoleByUserId
}
