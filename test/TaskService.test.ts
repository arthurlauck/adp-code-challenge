import TaskRequestRepository from "../src/TaskRequestRepository";
import TaskService from "../src/TaskService";
import TaskEntity from "../src/TaskEntity";

jest.mock('../src/TaskRequestRepository')
const TaskRepositoryMock = TaskRequestRepository as jest.MockedClass<typeof TaskRequestRepository>;

beforeEach(() => {
    TaskRepositoryMock.mockClear()
})

describe('Task service test', () => {
    TaskRepositoryMock.mockImplementation(() => {
        return {
            getTask: (): Promise<TaskEntity> => {
                return Promise.resolve(new TaskEntity(
                    '54a7dab4-a04a-41dc-ac86-1f6c8847cd66',
                    'addition',
                    7468248643685997,
                    -2475768253056459
                ))
            },
            submitTask: (id: string, result: number): Promise<void> => {
                return Promise.resolve()
            }
        }
    });

    test("Get task and calculate", async () => {
        const taskService = new TaskService(new TaskRepositoryMock)
        await taskService.getTaskAndCalculate()

        expect(TaskRepositoryMock).toHaveBeenCalledTimes(1);
    });
})
