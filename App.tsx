import * as React from 'react';
import { Component } from 'react';

import SrPronounce from '../lib';

interface P {}
interface S {}

export default class App extends Component<P, S> {
  render() {
    return (
      <p>
        In this sentence, <SrPronounce as="rècord">record</SrPronounce> is pronounced as a noun.
      </p>
    );
  }
}
