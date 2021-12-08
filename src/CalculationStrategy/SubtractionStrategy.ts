import CalculationStrategy from "./CalculationStrategy";

export default class SubtractionStrategy implements CalculationStrategy {
    calculate(left: number, right: number): number {
        return left - right
    }
}