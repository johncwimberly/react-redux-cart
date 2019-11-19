import Todo from './todo';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = { todo: jest.fn() };
    const enzymeWrapper = shallow(<Todo {...props} />);
  
    return {
        props,
        enzymeWrapper
    };
}

describe('todo should render', () => {
    let store;
    let component;
    
    beforeEach(() => {
        const todo = {
            id: 1,
            name: 'buy dog',
            completed: false
        };
        
        store = mockStore({
            items: [],
            visibility: 'SHOW_ALL'
        });

        store.dispatch = jest.fn();



        component = renderer.create(
            <Provider store={store}>
                <Todo todo={todo}/>
            </Provider>
        );
    });

    it('should have a value and id', () => {
        expect(component.root.findAllByType('input')[0].props.checked).toBe(false);
        expect(component.root.findAllByType('span')[0].props.children).toBe('buy dog');
    });
})