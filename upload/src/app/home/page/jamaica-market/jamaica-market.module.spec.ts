import { JamaicaMarketModule } from './jamaica-market.module';

describe('JamaicaMarketModule', () => {
  let jamaicaMarketModule: JamaicaMarketModule;

  beforeEach(() => {
    jamaicaMarketModule = new JamaicaMarketModule();
  });

  it('should create an instance', () => {
    expect(jamaicaMarketModule).toBeTruthy();
  });
});
