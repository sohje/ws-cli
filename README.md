# ws-cli
[![npm version](https://badge.fury.io/js/ws-cli.svg)](https://badge.fury.io/js/ws-cli)
[![Build Status](https://travis-ci.org/sohje/ws-cli.svg?branch=master)](https://travis-ci.org/sohje/ws-cli)

Dead simple WebSockets cli app.  
Sent messages to Ws server using cli.

## Install

```
$ npm install --global ws-cli
```


## Usage

```
$ ws --help

  Usage: ws [options] message

  Sent messages to WebSocket server using cli.

  Options:

    -h, --help           output usage information
    -V, --version        output the version number
    -H, --host <string>  WebSocket server host address

  Examples
    Sent 'Hello World' to ws on localhost
    $ ws -H ws://localhost:8080/ Hello World
```

## License

MIT © [Nikolay Spiridonov](https://github.com/sohje)
