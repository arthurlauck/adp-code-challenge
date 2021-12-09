/* eslint-disable no-console */
import TaskError from '../src/application/exception/TaskError';
import TaskService from '../src/application/service/TaskService';
import TaskCommand from '../src/infra/Command/TaskCommand';

jest.mock('../src/application/service/TaskService');

const TaskServiceMock = TaskService as jest.Mock<TaskService>;

describe('Task command test', () => {
  test('execute command', async () => {
    const result: number = 4554968748;

    const taskService = new TaskServiceMock() as jest.Mocked<TaskService>;
    taskService.getTaskAndCalculate.mockResolvedValueOnce(result);

    const consoleSpy = jest.spyOn(console, 'log');

    const taskCommand = new TaskCommand(taskService);
    await taskCommand.getTaskAndCalculateCommand();

    expect(consoleSpy).toHaveBeenCalledWith(`Calculation was correct! Result: ${result}`);
  });

  test('execute command task error', async () => {
    const taskService = new TaskServiceMock() as jest.Mocked<TaskService>;
    taskService.getTaskAndCalculate.mockRejectedValueOnce(new TaskError('error'));

    const consoleSpy = jest.spyOn(console, 'error');

    const taskCommand = new TaskCommand(taskService);
    await taskCommand.getTaskAndCalculateCommand();

    expect(consoleSpy).toHaveBeenCalledWith('error');
  });

  test('execute command another error', async () => {
    const taskService = new TaskServiceMock() as jest.Mocked<TaskService>;
    taskService.getTaskAndCalculate.mockRejectedValueOnce(new Error('error'));

    const consoleSpy = jest.spyOn(console, 'error');

    const taskCommand = new TaskCommand(taskService);
    await taskCommand.getTaskAndCalculateCommand();

    expect(consoleSpy).toHaveBeenCalledWith('Something wrong happened');
  });
});
