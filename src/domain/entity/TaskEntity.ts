import AdditionStrategy from "../service/CalculationStrategy/AdditionStrategy"
import CalculationContext from "../service/CalculationStrategy/CalculationContext"
import CalculationStrategy from "../service/CalculationStrategy/CalculationStrategy"
import DivisionStrategy from "../service/CalculationStrategy/DivisionStrategy"
import MultiplicationStrategy from "../service/CalculationStrategy/MultiplicationStrategy"
import RemainderStrategy from "../service/CalculationStrategy/RemainderStrategy"
import SubtractionStrategy from "../service/CalculationStrategy/SubtractionStrategy"

export default class TaskEntity {
    private _id: string
    private _operation: string // todo trocar para um enum
    private _left: number
    private _right: number

    constructor(id: string, operation: string, left: number, right: number) {
        this._id = id
        this._operation = operation
        this._left = left
        this._right = right
    }

    get id(): string {
        return this._id
    }

    get operation(): string {
        return this._operation
    }

    get left(): number {
        return this._left
    }

    get right(): number {
        return this._right
    }

    calculate(): number {
        const context = new CalculationContext(this.getStrategy())
        return context.calculate(this)
    }

    private getStrategy(): CalculationStrategy {
        switch (this.operation) {
            case 'addition':
                return new AdditionStrategy
            case 'multiplication':
                return new MultiplicationStrategy
            case 'subtraction':
                return new SubtractionStrategy
            case 'remainder':
                return new RemainderStrategy
            case 'division':
                return new DivisionStrategy
        }

        throw new Error('Strategy not implemented')
    }
}