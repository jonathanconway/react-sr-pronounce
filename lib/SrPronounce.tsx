import * as React from 'react';
import { Component } from 'react';

interface P {
  as: string;
  children?: Array<JSX.Element> | string;
}
interface S {}

export default class SrPronounce extends Component<P, S> {
  public static defaultProps: P = {
    as: '',
    children: []
  }

  render() {
    const style : any = {
      standard: {
        'fontSize': '1em'
      },
      phonetic: {
        'display': 'inline-block',
        'width': '1px',
        'height': '1px',
        'overflow': 'hidden'
      }
    }
    return <ruby>
      <rt aria-hidden="true"
          style={style.standard}>{this.props.children}</rt>
      <rt style={style.phonetic}>{this.props.as}</rt>
    </ruby>;
  }
}
