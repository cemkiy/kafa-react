import Query from 'graphql-query-builder'

const QueryRequest = function (methodName, variables, returnedSchema) {
  const query = new Query(methodName)
  query.filter(variables)
  query.find(returnedSchema)
  return '{' + query.toString() + '}'
}

const MutationRequest = function (methodName, variables, returnedSchema) {
  const query = new Query(methodName)
  query.filter(variables)
  query.find(returnedSchema)

  const mutationQuery = new Query('mutation')
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
