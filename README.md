# react-sr-pronounce

A React component that lets you control how content is pronounced by screen-readers. It does this using the [`ruby`](https://www.w3.org/wiki/HTML/Elements/ruby) element. The trick is described in an answer to the Stackoverflow question [#43491644](https://stackoverflow.com/a/43491802/23341).

## Installation

Install with npm (or yarn).

```sh
npm install react-sr-pronounce --save
```

## Usage

```
import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import SrPronounce from 'react-sr-pronounce';

export default class App extends Component {
  render() {
    return (
      <p>
        In this sentence, <SrPronounce as="rècord">record</SrPronounce> is pronounced as a noun.
      </p>
    );
  }
}
```

## Demo

Try out the [live example](http://jonathanconway.co/react-sr-pronounce).

## Support

Tested with:

* VoiceOver on macOS Sierra 10.12.5 in Chrome

## License

[MIT](LICENSE). Copyright (c) 2017 Jonathan Conway.
