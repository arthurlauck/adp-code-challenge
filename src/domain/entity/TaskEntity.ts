import AdditionStrategy from '../service/CalculationStrategy/AdditionStrategy';
import CalculationContext from '../service/CalculationStrategy/CalculationContext';
import CalculationStrategy from '../service/CalculationStrategy/CalculationStrategy';
import DivisionStrategy from '../service/CalculationStrategy/DivisionStrategy';
import MultiplicationStrategy from '../service/CalculationStrategy/MultiplicationStrategy';
import RemainderStrategy from '../service/CalculationStrategy/RemainderStrategy';
import SubtractionStrategy from '../service/CalculationStrategy/SubtractionStrategy';

export default class TaskEntity {
  constructor(
    public readonly id: string,
    public readonly operation: string,
    public readonly left: number,
    public readonly right: number,
  ) {
  }

  calculate(): number {
    const context = new CalculationContext(this.getStrategy());
    return context.calculate(this.left, this.right);
  }

  private getStrategy(): CalculationStrategy {
    switch (this.operation) {
      case 'addition':
        return new AdditionStrategy();
      case 'multiplication':
        return new MultiplicationStrategy();
      case 'subtraction':
        return new SubtractionStrategy();
      case 'remainder':
        return new RemainderStrategy();
      case 'division':
        return new DivisionStrategy();
      default:
        throw new Error('Strategy not implemented');
    }
  }
}
