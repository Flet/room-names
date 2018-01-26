var test = require('tape')

var roomNames = require('.')

test('fetch random name', function (t) {
  t.plan(1)
  var name = roomNames()
  t.ok(name)
})

test('fetch all rooms', function (t) {
  t.plan(1)
  var allRooms = require('./rooms.json')

  t.equals(allRooms.length, roomNames.rooms.length)
})
