import { IncomingMessage, ServerResponse } from "http"
import TaskService from "./TaskService"

export default class TaskController {
    constructor(private readonly taskService: TaskService) { }

    async getTaskAndCalculate(request: IncomingMessage, response: ServerResponse) {
        const result = await this.taskService.getTaskAndCalculate()

        response.writeHead(200, { "Content-Type": "application/json" })
        response.end(JSON.stringify({
            message: 'The calculation was correct!',
            result: result
        }))
    }
}