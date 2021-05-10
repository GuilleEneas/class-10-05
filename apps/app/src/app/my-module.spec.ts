import { add } from './my-module';

describe('my-module', () => {
  describe('Method: add', () => {
    it('should add 2 + 3 = 5', () => {
      expect(add(2, 3)).toEqual(5);
    });

    it('should add 1 + 1 = 2', () => {
      expect(add(1, 1)).toEqual(2);
    });
  });
});
