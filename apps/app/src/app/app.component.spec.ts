/* eslint-disable @typescript-eslint/no-explicit-any */
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { OneService } from './one.service';
import { provideAutoSpy, Spy } from 'jest-auto-spies';

describe('AppComponent', () => {
  let componentUnderTest: AppComponent;
  let oneServiceSpy: Spy<OneService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppComponent, provideAutoSpy(OneService)],
    });

    componentUnderTest = TestBed.inject(AppComponent);
    oneServiceSpy = TestBed.inject<any>(OneService);
  });

  describe('METHOD: getThingsFromService', () => {
    it('should get the things from the service', () => {
      const expectedThings = 'any value';
      oneServiceSpy.getThings.mockReturnValue(expectedThings);

      const actualThings = componentUnderTest.getThingsFromService();

      expect(actualThings).toEqual(expectedThings);
    });
  });
});
