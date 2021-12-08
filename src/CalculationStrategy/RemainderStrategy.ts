import CalculationStrategy from "./CalculationStrategy";

export default class RemainderStrategy implements CalculationStrategy {
    calculate(left: number, right: number): number {
        return left % right
    }
}