import axios from "axios"
import TaskEntity from "../src/TaskEntity"
import TaskRequestRepository from "../src/TaskRequestRepository"

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
})
