import { ActivateAccountModule } from './activate-account.module';

describe('ActivateAccountModule', () => {
  let activateAccountModule: ActivateAccountModule;

  beforeEach(() => {
    activateAccountModule = new ActivateAccountModule();
  });

  it('should create an instance', () => {
    expect(activateAccountModule).toBeTruthy();
  });
});
