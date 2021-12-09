import TaskRequestRepository from "../src/infra/repository/TaskRequestRepository";
import TaskEntity from "../src/domain/entity/TaskEntity";
import TaskService from "../src/application/service/TaskService";

jest.mock('../src/infra/repository/TaskRequestRepository')
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
    })

    test("Get task and calculate", async () => {
        const taskService = new TaskService(new TaskRepositoryMock)
        const result = await taskService.getTaskAndCalculate()

        expect(TaskRepositoryMock).toHaveBeenCalledTimes(1);
        expect(result).toBe(4992480390629538)
    })
})
