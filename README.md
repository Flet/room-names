# room-names

A list of rooms curated from Wikipedia.

## Install

```sh
npm install room-names [--g|--save]
```

## Example

```js
var room = require('room-names')

// random character
console.log(room())
//=> 'Sunroom'

// all rooms
console.log(room.rooms)
//=> ["Aerary","Air shower", ..., "Wiring closet", "Workshop"]
```

## Usage

[![NPM](https://nodei.co/npm/room-names.png)](https://www.npmjs.com/package/room-names)

### API

#### `name = room()`

Returns a random room name, like `"Attic"`.

#### `list = room.rooms`

The array of all room names.

#### `list = require('room-names/rooms.json')`

The required JSON array.

### CLI

You can also use the CLI here.

```
Usage:
  room-names [opt]

Options:
  --help  show help
  --all   list all rooms
```

Example:

```sh
$ room-names
Frigidarium
```

## See Also

- [marvel-characters](https://github.com/mattdesl/marvel-characters)

## License

MIT, see [LICENSE.md](http://github.com/flet/room-names/blob/master/LICENSE.md) for details.
