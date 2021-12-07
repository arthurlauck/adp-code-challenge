import CalculationStrategy from "./CalculationStrategy";

export default class AdditionStrategy implements CalculationStrategy {
    calculate(left: number, right: number): number {
        return left + right
    }

}