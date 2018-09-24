import { ForexModule } from './forex.module';

describe('ForexModule', () => {
  let forexModule: ForexModule;

  beforeEach(() => {
    forexModule = new ForexModule();
  });

  it('should create an instance', () => {
    expect(forexModule).toBeTruthy();
  });
});
