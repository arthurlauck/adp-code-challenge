import CalculationStrategy from "./CalculationStrategy";

export default class MultiplicationStrategy implements CalculationStrategy {
    calculate(left: number, right: number): number {
        return left * right
    }
}