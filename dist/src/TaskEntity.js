"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AdditionStrategy_1 = __importDefault(require("./CalculationStrategy/AdditionStrategy"));
const CalculationContext_1 = __importDefault(require("./CalculationStrategy/CalculationContext"));
class TaskEntity {
    constructor(id, operation, left, right) {
        this._id = id;
        this._operation = operation;
        this._left = left;
        this._right = right;
    }
    get id() {
        return this._id;
    }
    get operation() {
        return this._operation;
    }
    get left() {
        return this._left;
    }
    get right() {
        return this._right;
    }
    calculate() {
        // const strategy: CalculationStrategy
        // switch (this.operation) {
        //     case 'additional':
        //         strategy = new AdditionStrategy
        //         break;
        // }
        const context = new CalculationContext_1.default(this.getStrategy());
        return context.calculate(this);
    }
    getStrategy() {
        switch (this.operation) {
            case 'addition':
                return new AdditionStrategy_1.default;
        }
        throw new Error('Strategy not implemented');
    }
}
exports.default = TaskEntity;
