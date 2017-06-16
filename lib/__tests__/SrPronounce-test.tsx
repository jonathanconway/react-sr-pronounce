import * as React from 'react';
import { render } from 'enzyme';

import SrPronounce from '../SrPronounce';

describe('<SrPronounce />', () =>
  describe('instantiated with correct props', () =>
    it('renders text in appropriate child elements', () => {
      const next = render(
        <SrPronounce as="phonetic">standard</SrPronounce>
      );

      expect(next[0].children[0].children[0].children[0].data).toEqual('standard');
      expect(next[0].children[0].children[1].children[0].data).toEqual('phonetic');
    })
  })
);
