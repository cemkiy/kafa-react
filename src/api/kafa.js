import { KafasClient } from '../middleware/clients.js';

const kafasQuery = `query kafas($user_id: String, $torrent_id: String,
  $created_at_from: String, $created_at_to: String, $updated_at_from: String,
  $updated_at_to: String, $limit: Int, $skip: Int, $sort_field: String,
  $sort_type: String) {
  kafas(user_id: $user_id, torrent_id: $torrent_id,
    created_at_from: $created_at_from, created_at_to: $created_at_to,
    updated_at_from: $updated_at_from, updated_at_to: $updated_at_to,
    limit: $limit, skip: $skip, sort_field: $sort_field, sort_type: $sort_type) {
      id
      user{
        id
        username
        email
      }
      torrent{
        id
        name
      }
      kafa_count
      created_at
      updated_at
  }
}`

const kafaByIdQuery = `query kafaById($id: String!) {
  kafaById(id: $id) {
    id
    user{
      id
      username
      email
    }
    torrent{
      id
      name
    }
    kafa_count
    created_at
    updated_at
  }
}`

const incrementKafaMutation = `mutation incrementKafa($torrent_id: String!){
  incrementKafa(input: {torrent_id: $torrent_id}) {
      id
      user{
        id
        username
        email
      }
      torrent{
        id
        name
      }
      kafa_count
      created_at
      updated_at
  }
}
`

const updateKafaMutation = `mutation updateKafa($id: String!, $kafa_count: Int!){
  updateKafa(id: $id, input: {kafa_count: $kafa_count}) {
      id
      user{
        id
        username
        email
      }
      torrent{
        id
        name
      }
      kafa_count
      created_at
      updated_at
  }
}
`

const deleteKafaMutation = `mutation deleteKafa($id: String!){
  deleteKafa(
    id: $id
  ) {
    id
  }
}
`

var Kafas = function (variables) {
  return kafasClient.request(kafasQuery, variables);
}

var KafaById = function (variables) {
  return kafasClient.request(kafaByIdQuery, variables);
}

var IncrementKafa = function (variables) {
  return kafasClient.request(IncrementKafaMutation, variables);
}

var UpdateKafa = function (variables) {
  return kafasClient.request(updateKafaMutation, variables);
}

var DeleteKafa = function (variables) {
  return kafasClient.request(deleteKafaMutation, variables);
}

export { Kafas, KafaById, IncrementKafa, UpdateKafa, DeleteKafa };
