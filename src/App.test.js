import React from 'react';
import { shallow } from 'enzyme';
import { App, LikedProduct, Product } from './App';


it('LikedProduct renders correctly', () => {
    const noop = () => {};
    const component = shallow(<LikedProduct title="test" remove={noop} />);
    const rendered = <span><button className="cross" onClick={noop} title="Dislike item"></button>{"test"}</span>;
    expect(component.equals(rendered)).toEqual(true);
});

it('Product displays title', () => {
    const component = shallow(<Product title="test" />);
    const renderedTitle = <span>test</span>;
    expect(component.contains(renderedTitle)).toEqual(true);
});

it('Product displays image', () => {
    const noop = () => {};
    const component = shallow(<Product img="https://url" description="blah" />);
    const renderedImg = <img src="https://url" alt="" title="blah"/>;
    expect(component.contains(renderedImg)).toEqual(true);
});
