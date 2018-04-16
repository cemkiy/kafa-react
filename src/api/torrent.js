import { TorrentsClient } from '../middleware/clients.js';

const torrentsQuery = `query torrents($name: String, $user_id: String,
  $info_link: String, $info_hash: String, $tag: String, $categories: [String],
  $audios: [String], $subtitles: [String], $kafa_from: Int, $kafa_to: Int,
  $created_at_from: String, $created_at_to: String, $updated_at_from: String,
  $updated_at_to: String, $limit: Int, $skip: Int, $sort_field: String,
  $sort_type: String) {
  torrents(name: $name, user_id: $user_id, info_link: $info_link,
    info_hash: $info_hash, tag: $tag, categories: $categories, audios: $audios,
    subtitles: $subtitles, kafa_from: $kafa_from, kafa_to: $kafa_to,
    created_at_from: $created_at_from, created_at_to: $created_at_to,
    updated_at_from: $updated_at_from, updated_at_to: $updated_at_to,
    limit: $limit, skip: $skip, sort_field: $sort_field, sort_type: $sort_type) {
      id
      name
      user{
        id
        username
        email
      }
      description
      size
      info_link
      status
      info_hash
      screens
      comments
      tag
      languages
      kafa
      created_at
      updated_at
  }
}`

const torrentByIdQuery = `query torrentById($id: String!) {
  torrentById(id: $id) {
    id
    name
    user{
      id
      username
      email
    }
    description
    size
    info_link
    status
    info_hash
    screens
    comments
    tag
    languages
    kafa
    created_at
    updated_at
  }
}`

const createTorrentMutation = `mutation createTorrent($name: String, $user_id: String,
  $info_link: String, $info_hash: String, $tag: String, $categories: [String],
  $audios: [String], $subtitles: [String]){
  createTorrent(input: {
    name: $name, user_id: $user_id, info_link: $info_link,
    info_hash: $info_hash, tag: $tag, categories: $categories, audios: $audios,
    subtitles: $subtitles}) {
    id
    name
    user{
      id
      username
      email
    }
    description
    size
    info_link
    status
    info_hash
    screens
    comments
    tag
    languages
    kafa
    created_at
  }
}
`

const updateTorrentMutation = `mutation updateTorrent($id: String!, $name: String, $user_id: String,
  $info_link: String, $info_hash: String, $tag: String, $categories: [String],
  $audios: [String], $subtitles: [String]){
  updateTorrent(id: $id, input: {
    name: $name, user_id: $user_id, info_link: $info_link,
    info_hash: $info_hash, tag: $tag, categories: $categories, audios: $audios,
    subtitles: $subtitles}) {
    id
    name
    user{
      id
      username
      email
    }
    description
    size
    info_link
    status
    info_hash
    screens
    comments
    tag
    languages
    kafa
    created_at
    updated_at
  }
}
`

const deleteTorrentMutation = `mutation deleteTorrent($id: String!){
  deleteTorrent(
    id: $id
  ) {
    id
  }
}
`

var Torrents = function (variables) {
  return torrentsClient.request(torrentsQuery, variables);
}

var TorrentById = function (variables) {
  return torrentsClient.request(torrentByIdQuery, variables);
}

var CreateTorrent = function (variables) {
  return torrentsClient.request(createTorrentMutation, variables);
}

var UpdateTorrent = function (variables) {
  return torrentsClient.request(updateTorrentMutation, variables);
}

var DeleteTorrent = function (variables) {
  return torrentsClient.request(deleteTorrentMutation, variables);
}

export { Torrents, TorrentById, CreateTorrent, UpdateTorrent, DeleteTorrent };
