export default interface CalculationStrategy {
    calculate(left: number, right: number): number
}