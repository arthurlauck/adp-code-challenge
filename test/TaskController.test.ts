import { IncomingMessage, ServerResponse } from "http";
import TaskController from "../src/TaskController";
import TaskService from "../src/TaskService";

jest.mock('../src/TaskService')

const TaskServiceMock = TaskService as jest.Mock<TaskService>;

describe('Task controller test', () => {
    test.only("Get task and calculate", async () => {
        const result: number = 564564664544
        const taskService = new TaskServiceMock as jest.Mocked<TaskService>
        taskService.getTaskAndCalculate.mockResolvedValueOnce(result)

        let statusCode = null
        let header = null
        let body = ''
        const responseStub: ServerResponse = {
            writeHead: function (status: number, _header: object) {
                statusCode = status
                header = _header
            },
            end: (_body: string) => {
                body = _body
            }
        } as unknown as ServerResponse

        const taskController = new TaskController(taskService)
        await taskController.getTaskAndCalculate({} as IncomingMessage, responseStub)

        expect(statusCode).toBe(200)
        expect(header).toStrictEqual({ "Content-Type": "application/json" })
        expect(JSON.parse(body)).toStrictEqual({
            message: 'The calculation was correct!',
            result: result
        })
    });
})