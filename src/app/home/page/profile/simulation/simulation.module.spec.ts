import { SimulationModule } from './simulation.module';

describe('SimulationModule', () => {
  let simulationModule: SimulationModule;

  beforeEach(() => {
    simulationModule = new SimulationModule();
  });

  it('should create an instance', () => {
    expect(simulationModule).toBeTruthy();
  });
});
