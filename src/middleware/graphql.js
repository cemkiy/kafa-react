import Query from 'graphql-query-builder'

var QueryRequest = function (methodName, variables, returnedSchema) {
  let query = new Query(methodName)
  query.filter(variables)
  query.find(returnedSchema)
  return '{' + query.toString() + '}'
}

var MutationRequest = function (methodName, variables, returnedSchema) {
  let query = new Query(methodName)
  query.filter(variables)
  query.find(returnedSchema)

  let mutationQuery = new Query('mutation')
  mutationQuery.find([
    {
      [methodName]: query
    }
  ])
  return mutationQuery.toString()
}

export {
  QueryRequest,
  MutationRequest
}
