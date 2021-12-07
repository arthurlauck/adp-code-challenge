"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CalculationContext {
    constructor(strategy) {
        this.strategy = strategy;
    }
    calculate(task) {
        return this.strategy.calculate(task.left, task.right);
    }
}
exports.default = CalculationContext;
