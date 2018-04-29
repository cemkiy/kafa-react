import {KafasClient} from '../middleware/clients.js'
import {QueryRequest, MutationRequest} from '../middleware/graphql.js'

var Kafas = function (variables, returnedSchema) {
  let kafasQuery = QueryRequest('kafas', variables, returnedSchema)
  return KafasClient.request(kafasQuery)
}

var KafaById = function (variables, returnedSchema) {
  let kafaByIdQuery = QueryRequest('kafaById', variables, returnedSchema)
  return KafasClient.request(kafaByIdQuery)
}

var IncrementKafa = function (input, returnedSchema) {
  let variables = {
    'input': input
  }
  let incrementKafaMutation = MutationRequest('incrementKafa', variables, returnedSchema)
  return KafasClient.request(incrementKafaMutation)
}

var UpdateKafa = function (id, input, returnedSchema) {
  let variables = {
    'id': id,
    'input': input
  }
  let updateKafaMutation = MutationRequest('updateKafa', variables, returnedSchema)
  return KafasClient.request(updateKafaMutation)
}

var DeleteKafa = function (id, returnedSchema) {
  let variables = {
    'id': id
  }
  let deleteKafaMutation = MutationRequest('deleteKafa', variables, returnedSchema)
  return KafasClient.request(deleteKafaMutation, variables)
}

export {
  Kafas,
  KafaById,
  IncrementKafa,
  UpdateKafa,
  DeleteKafa
}
