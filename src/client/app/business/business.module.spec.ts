import { BusinessModule } from './business.module';

describe('BusinessModule', () => {
  let businessModule: BusinessModule;

  beforeEach(() => {
    businessModule = new BusinessModule();
  });

  it('should create an instance', () => {
    expect(businessModule).toBeTruthy();
  });
});
