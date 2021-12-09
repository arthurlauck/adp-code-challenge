import axios, { AxiosError } from "axios"
import TaskEntity from "../src/domain/entity/TaskEntity"
import TaskError from "../src/application/exception/TaskError";
import TaskRequestRepository from "../src/infra/repository/TaskRequestRepository"

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Task request repository test', () => {
    test('Get task test', async () => {
        const taskRequestResponse: Object = {
            id: "b4d839ab-979c-4690-bab2-38b6910b6b75",
            operation: "division",
            left: -5427000040906539,
            right: -8137894360654771
        };

        mockedAxios.get.mockReturnValueOnce({ data: taskRequestResponse } as any)

        const taskRepository = new TaskRequestRepository
        const taskEntity = await taskRepository.getTask()

        expect(axios.get).toHaveBeenCalled();
        expect(taskEntity).toBeInstanceOf(TaskEntity)
    })

    test('Submit task test', async () => {
        mockedAxios.post.mockReturnValueOnce({ data: 'Corrrect' } as any)

        const id: string = 'b4d839ab-979c-4690-bab2-38b6910b6b75';
        const result: number = 2718632321321

        const taskRepository = new TaskRequestRepository
        await taskRepository.submitTask(id, result)

        expect(axios.post).toHaveBeenCalled();
    })

    test('Submit error 400', async () => {
        const error = {
            response: {
                status: 400
            }
        }

        mockedAxios.post.mockRejectedValueOnce(error)

        const id: string = 'b4d839ab-979c-4690-bab2-38b6910b6b75';
        const result: number = 2718632321321

        const taskError = new TaskError('Incorrect value in result; no ID specified; value is invalid', 400)

        const taskRepository = new TaskRequestRepository
        await expect(taskRepository.submitTask(id, result)).rejects.toThrow(taskError)
    })

    test('Submit error 404', async () => {
        const error = {
            response: {
                status: 404
            }
        }

        mockedAxios.post.mockRejectedValueOnce(error)

        const id: string = 'b4d839ab-979c-4690-bab2-38b6910b6b75';
        const result: number = 2718632321321

        const taskError = new TaskError('Value not found for specified ID', 404)

        const taskRepository = new TaskRequestRepository
        await expect(taskRepository.submitTask(id, result)).rejects.toThrow(taskError)
    })

    test('Submit error 503', async () => {
        const error = {
            response: {
                status: 503
            }
        }

        mockedAxios.post.mockRejectedValueOnce(error)

        const id: string = 'b4d839ab-979c-4690-bab2-38b6910b6b75';
        const result: number = 2718632321321

        const taskError = new TaskError('Error communicating with database', 503)

        const taskRepository = new TaskRequestRepository
        await expect(taskRepository.submitTask(id, result)).rejects.toThrow(taskError)
    })

    test('Submit error 400 default', async () => {
        const error = {
            response: {
                status: 'not set'
            }
        }

        mockedAxios.post.mockRejectedValueOnce(error)

        const id: string = 'b4d839ab-979c-4690-bab2-38b6910b6b75';
        const result: number = 2718632321321

        const taskError = new TaskError('Something wrong happened', 400)

        const taskRepository = new TaskRequestRepository
        await expect(taskRepository.submitTask(id, result)).rejects.toThrow(taskError)
    })
})
