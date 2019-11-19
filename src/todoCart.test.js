import React from 'react';
import TodoCart from './todoList'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import items from './reducers/itemsReducer';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {};
    const enzymeWrapper = shallow(<TodoCart {...props} />);
  
    return {
        props,
        enzymeWrapper
    };
}

describe("TODO should be TODO-like", () => {
    let store;
    let component;
    
    beforeEach(() => {
        store = mockStore({
            items: [],
            visibility: 'SHOW_ALL'
        });

        store.dispatch = jest.fn();

        component = renderer.create(
            <Provider store={store}>
                <TodoCart />
            </Provider>
        );
    });

    it('TODO should have single div with no content on render no state given', () => {
        expect(component.root.findAllByType('div')).toHaveLength(1);
    });
});