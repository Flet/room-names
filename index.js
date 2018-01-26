var uniqueRandomArray = require('unique-random-array')
var rooms = require('./rooms.json')

module.exports = uniqueRandomArray(rooms)
module.exports.rooms = rooms
