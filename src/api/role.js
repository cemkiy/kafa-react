import { RolesClient  } from '../middleware/clients.js';

const roleByUserIdQuery = `query roleByUserId($user_id: String!) {
  roleByUserId(user_id: $user_id) {
    type
  }
}`

var RoleByUserId = function (variables) {
  return RolesClient.request(roleByUserIdQuery, variables);
}

export { RoleByUserId };
