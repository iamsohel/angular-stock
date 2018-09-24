import { PrivatePostModule } from './private-post.module';

describe('PrivatePostModule', () => {
  let privetPostModule: PrivatePostModule;

  beforeEach(() => {
    privetPostModule = new PrivatePostModule();
  });

  it('should create an instance', () => {
    expect(privetPostModule).toBeTruthy();
  });
});
