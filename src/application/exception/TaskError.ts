export default class TaskError extends Error {
    constructor(private readonly _message: string, private readonly _statusCode: number = 400) {
        super(_message)
    }
    
    get message(): string {
        return this._message
    }

    get statusCode(): number {
        return this._statusCode
    }
}
