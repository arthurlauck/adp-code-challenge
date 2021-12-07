import TaskEntity from "../TaskEntity";
import CalculationStrategy from "./CalculationStrategy";

export default class CalculationContext {
    private strategy: CalculationStrategy

    constructor(strategy: CalculationStrategy) {
        this.strategy = strategy
    }

    calculate(task: TaskEntity): number {
        return this.strategy.calculate(task.left, task.right)
    }
}