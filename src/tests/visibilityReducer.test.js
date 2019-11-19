import visibility from '../reducers/visibilityReducer'

describe('Visibility Reducer', () => {
    it('should initialize as show all', () => {
        let testState = visibility(undefined, {});
        expect(testState).toBe('SHOW_ALL')
    });

    it('should change to SHOW_COMPLETED when passed SHOW_COMPLETED in action', () => {
        let testState = visibility(undefined, {type: 'SHOW_COMPLETED'});
        expect(testState).toBe('SHOW_COMPLETED');
    });

    it('should change to SHOW_IN_PROGRESS when passed SHOW_IN_PROGRESS in action', () => {
        let testState = visibility(undefined, {type: 'SHOW_IN_PROGRESS'});
        expect(testState).toBe('SHOW_IN_PROGRESS');
    });
});