/* eslint-disable no-console */
import TaskError from '../../application/exception/TaskError';
import TaskService from '../../application/service/TaskService';

export default class TaskCommand {
  constructor(private readonly taskService: TaskService) {}

  async getTaskAndCalculateCommand() {
    try {
      const result = await this.taskService.getTaskAndCalculate();
      console.log(`Calculation was correct! Result: ${result}`);
    } catch (error) {
      if (error instanceof TaskError) {
        console.error(error.message);
        return;
      }

      console.error('Something wrong happened');
    }
  }
}
