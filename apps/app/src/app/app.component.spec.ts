import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let componentUnderTest: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppComponent],
    });

    componentUnderTest = TestBed.inject(AppComponent);
  });

  describe('METHOD: add', () => {
    it('should add 2 + 3 = 5', () => {
      const expectedValue = 5;

      const actualValue = componentUnderTest.add(2, 3);

      expect(actualValue).toEqual(expectedValue);
    });

    it('should add 1 + 1 = 2', () => {
      expect(componentUnderTest.add(1, 1)).toEqual(2);
    });
  });

  describe('METHOD: setValue', () => {
    it('should set internal value', () => {
      const input = 'fake Value';

      componentUnderTest.setValue(input);

      expect(componentUnderTest.value).toEqual(input);
    });
  });

  describe('METHOD: getValue', () => {
    it('should return internal value', () => {
      componentUnderTest.value = 'fake Value';

      const actualValue = componentUnderTest.getValue();

      expect(actualValue).toEqual(componentUnderTest.value);
    });
  });
});
