import CalculationStrategy from './CalculationStrategy';

export default class DivisionStrategy implements CalculationStrategy {
  // eslint-disable-next-line class-methods-use-this
  calculate(left: number, right: number): number {
    return left / right;
  }
}
