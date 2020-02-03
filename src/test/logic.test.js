import React from 'react'
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Layout from '../modules/Layout.jsx';
import Adapter from 'enzyme-adapter-react-16';
import mochaSnapshots from 'mocha-snapshots';
configure({ adapter: new Adapter() });
mochaSnapshots.setup({ sanitizeClassNames: false });

describe('<Layout />', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Layout/>)
    // You can match Enzyme wrappers
    expect(wrapper).to.matchSnapshot();
    
    // Strings
    // expect('you can match strings').to.matchSnapshot();
    //
    // // Numbers
    // expect(123).to.matchSnapshot();
    //
    // // Or any object
    // expect({ a: 1, b: { c: 1 } }).to.matchSnapshot();
   
  });
  // it('should match snapshot', () => {
  //   const layout = mount(<Layout />);
  //   sinon.spy(layout.changeLocale);
  //
  //   console.log(layout);
  //
  //   layout.find('.aim').simulate("click");
  //
  //   sinon.assert.calledWith(layout.changeLocale, "ru");
  //   assert.strictEqual(layout.state.locale.currentLocale, "ru")
  //
  //   import {JSDOM} from 'jsdom';
  //   const dom = new JSDOM(`<!doctype html><html lang="en"><head></head><body></body></html>`);
  //
  // });
});