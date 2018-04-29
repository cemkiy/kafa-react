import {TorrentsClient} from '../middleware/clients.js';

var Torrents = function(variables, returnedSchema) {
  let torrentsQuery = QueryRequest("torrents", variables, returnedSchema);
  return torrentsClient.request(torrentsQuery);
}

var TorrentById = function(variables, returnedSchema) {
  let torrentByIdQuery = QueryRequest("torrentById", variables, returnedSchema);
  return torrentsClient.request(torrentByIdQuery);
}

var CreateTorrent = function(input, returnedSchema) {
  let variables = {
    'input': input
  };
  let createTorrentMutation = MutationRequest("createTorrent", variables, returnedSchema);
  return torrentsClient.request(createTorrentMutation);
}

var UpdateTorrent = function(id, variables, returnedSchema) {
  let variables = {
    'id': id,
    'input': input
  };
  let updateTorrentMutation = MutationRequest("updateTorrent", variables, returnedSchema);
  return torrentsClient.request(updateTorrentMutation);
}

var DeleteTorrent = function(id, returnedSchema) {
  let variables = {
    'id': id
  };
  let deleteTorrentMutation = MutationRequest("deleteTorrent", variables, returnedSchema);
  return torrentsClient.request(deleteTorrentMutation, variables);
}

export {
  Torrents,
  TorrentById,
  CreateTorrent,
  UpdateTorrent,
  DeleteTorrent
};
