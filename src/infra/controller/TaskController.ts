import { IncomingMessage, ServerResponse } from "http"
import TaskService from "../../application/service/TaskService"
import TaskError from "../../application/exception/TaskError"

export default class TaskController {
    constructor(private readonly taskService: TaskService) { }

    async getTaskAndCalculate(request: IncomingMessage, response: ServerResponse) {
        response.setHeader("Content-Type", "application/json")
        try {
            const result = await this.taskService.getTaskAndCalculate()

            response.statusCode = 200
            response.end(JSON.stringify({
                message: 'The calculation was correct!',
                result: result
            }))
        } catch (error) {
            if (error instanceof TaskError) {
                response.statusCode = error.statusCode
                return response.end(JSON.stringify({
                    message: error.message
                }))
            }

            // default error
            response.statusCode = 400
            response.end(JSON.stringify({
                message: 'Something wrong happened'
            }))
        }
    }
}