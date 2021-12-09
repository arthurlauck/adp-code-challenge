import CalculationStrategy from './CalculationStrategy';

export default class CalculationContext {
  private strategy: CalculationStrategy;

  constructor(strategy: CalculationStrategy) {
    this.strategy = strategy;
  }

  calculate(left: number, right: number): number {
    return this.strategy.calculate(left, right);
  }
}
