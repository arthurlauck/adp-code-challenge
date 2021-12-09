import TaskRepository from '../../domain/repository/TaskRepository';

export default class TaskService {
  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  async getTaskAndCalculate(): Promise<number> {
    const task = await this.taskRepository.getTask();
    const result: number = task.calculate();

    await this.taskRepository.submitTask(task.id, result);

    return result;
  }
}
