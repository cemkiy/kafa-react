import {TorrentsClient} from '../middleware/clients.js'
import {QueryRequest, MutationRequest} from '../middleware/graphql.js'

var Torrents = function (variables, returnedSchema) {
  let torrentsQuery = QueryRequest('torrents', variables, returnedSchema)
  return TorrentsClient.request(torrentsQuery)
}

var TorrentById = function (variables, returnedSchema) {
  let torrentByIdQuery = QueryRequest('torrentById', variables, returnedSchema)
  return TorrentsClient.request(torrentByIdQuery)
}

var CreateTorrent = function (input, returnedSchema) {
  let variables = {
    'input': input
  }
  let createTorrentMutation = MutationRequest('createTorrent', variables, returnedSchema)
  return TorrentsClient.request(createTorrentMutation)
}

var UpdateTorrent = function (id, input, returnedSchema) {
  let variables = {
    'id': id,
    'input': input
  }
  let updateTorrentMutation = MutationRequest('updateTorrent', variables, returnedSchema)
  return TorrentsClient.request(updateTorrentMutation)
}

var DeleteTorrent = function (id, returnedSchema) {
  let variables = {
    'id': id
  }
  let deleteTorrentMutation = MutationRequest('deleteTorrent', variables, returnedSchema)
  return TorrentsClient.request(deleteTorrentMutation, variables)
}

export {
  Torrents,
  TorrentById,
  CreateTorrent,
  UpdateTorrent,
  DeleteTorrent
}
