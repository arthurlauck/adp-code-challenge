import CalculationStrategy from "./CalculationStrategy";

export default class DivisionStrategy implements CalculationStrategy {
    calculate(left: number, right: number): number {
        return left / right
    }
}