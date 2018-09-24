import { ResendCodeModule } from './resend-code.module';

describe('ResendCodeModule', () => {
  let resendCodeModule: ResendCodeModule;

  beforeEach(() => {
    resendCodeModule = new ResendCodeModule();
  });

  it('should create an instance', () => {
    expect(resendCodeModule).toBeTruthy();
  });
});
