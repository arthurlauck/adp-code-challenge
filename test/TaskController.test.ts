import { IncomingMessage, ServerResponse } from "http";
import TaskService from "../src/application/service/TaskService";
import TaskController from "../src/infra/controller/TaskController";
import TaskError from "../src/application/exception/TaskError";

jest.mock('../src/application/service/TaskService')

const TaskServiceMock = TaskService as jest.Mock<TaskService>;

describe('Task controller test', () => {
    test("Get task and calculate", async () => {
        const result: number = 564564664544
        const taskService = new TaskServiceMock as jest.Mocked<TaskService>
        taskService.getTaskAndCalculate.mockResolvedValueOnce(result)

        let header = null
        let body = ''
        const responseStub: ServerResponse = {
            statusCode: null,
            setHeader: (name: string, value: string) => {
                header = `${name}: ${value}`
            },
            end: (_body: string) => {
                body = _body
            }
        } as unknown as ServerResponse

        const taskController = new TaskController(taskService)
        await taskController.getTaskAndCalculate({} as IncomingMessage, responseStub)

        expect(responseStub.statusCode).toBe(200)
        expect(header).toStrictEqual("Content-Type: application/json")
        expect(JSON.parse(body)).toStrictEqual({
            message: 'The calculation was correct!',
            result: result
        })
    });

    test("Should get error response", async () => {
        const errorMessage = 'Incorrect value in result; no ID specified; value is invalid'
        const taskService = new TaskServiceMock as jest.Mocked<TaskService>
        taskService.getTaskAndCalculate.mockRejectedValueOnce(new TaskError(errorMessage, 400))

        let header = null
        let body = ''
        const responseStub: ServerResponse = {
            statusCode: null,
            setHeader: (name: string, value: string) => {
                header = `${name}: ${value}`
            },
            end: (_body: string) => {
                body = _body
            }
        } as unknown as ServerResponse

        const taskController = new TaskController(taskService)
        await taskController.getTaskAndCalculate({} as IncomingMessage, responseStub)

        expect(responseStub.statusCode).toBe(400)
        expect(header).toStrictEqual("Content-Type: application/json")
        expect(JSON.parse(body)).toStrictEqual({
            message: errorMessage
        })
    });

    test("Should get default error response ", async () => {
        const taskService = new TaskServiceMock as jest.Mocked<TaskService>
        taskService.getTaskAndCalculate.mockRejectedValueOnce(new Error('random error'))

        let header = null
        let body = ''
        const responseStub: ServerResponse = {
            statusCode: null,
            setHeader: (name: string, value: string) => {
                header = `${name}: ${value}`
            },
            end: (_body: string) => {
                body = _body
            }
        } as unknown as ServerResponse

        const taskController = new TaskController(taskService)
        await taskController.getTaskAndCalculate({} as IncomingMessage, responseStub)

        expect(responseStub.statusCode).toBe(400)
        expect(header).toStrictEqual("Content-Type: application/json")
        expect(JSON.parse(body)).toStrictEqual({
            message: 'Something wrong happened'
        })
    });
})