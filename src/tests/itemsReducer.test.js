import items from '../reducers/itemsReducer';

describe('Item Reducer', () => {
    it('should return empty array by default', () => {
        let testState = items(undefined, {});
        expect(testState).toEqual([]);
    });
    it('should return list with one item when given first item', () => {
        let testState = items(undefined, { type: 'ADD', name:'House'});
        expect(testState).toEqual([{name: 'House', completed: false, id: 1}]);
    });
    it('should return list with one updated item when update action is called', () => {
        let testState = items([{name: 'House', completed: false}], {type: 'UPDATE', name: 'House', completed: true});
        expect(testState).toEqual([{name: 'House', completed: true}]);
    });
    it('should return empty array when single item is deleted on a DELETE action', () => {
        let testState = items([{name: 'House', completed: false}], {type: 'DELETE', name: 'House'});
        expect(testState).toEqual([]);
    });
})