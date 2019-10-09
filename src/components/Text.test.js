import React from 'react';
import { render } from 'enzyme';
import Text from './Text'

describe('<Text />', () => {
  it('renders the props as text', () => {
    const wrapper = render(<Text text='some book title' />);
    const text = wrapper.text();
    expect(text).toEqual('some book title');
  });
});
