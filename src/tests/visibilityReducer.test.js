import visibility from '../reducers/visibilityReducer'

describe('Visibility Reducer', () => {
    it('should initialize as show all', () => {
        let testState = visibility(undefined, {});
        expect(testState).toBe('SHOW_ALL')
    });

    it('should change to SHOW_ON_SALE when passed SHOW_ON_SALE in action', () => {
        let testState = visibility(undefined, {type: 'SHOW_ON_SALE'});
        expect(testState).toBe('SHOW_ON_SALE');
    });

    it('should change to SHOW_NOT_ON_SALE when passed SHOW_NOT_ON_SALE in action', () => {
        let testState = visibility(undefined, {type: 'SHOW_NOT_ON_SALE'});
        expect(testState).toBe('SHOW_NOT_ON_SALE');
    });
});