import axios from 'axios';
import TaskEntity from '../../domain/entity/TaskEntity';
import TaskRepository from '../../domain/repository/TaskRepository';
import TaskError from '../../application/exception/TaskError';

export default class TaskRequestRepository implements TaskRepository {
  // eslint-disable-next-line class-methods-use-this
  async getTask(): Promise<TaskEntity> {
    try {
      const { data } = await axios.get('https://interview.adpeai.com/api/v1/get-task', {
        timeout: 5000,
      });
      return new TaskEntity(data.id, data.operation, data.left, data.right);
    } catch (error) {
      throw new TaskError('Something happened trying to get the task');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async submitTask(id: string, result: number): Promise<void> {
    try {
      await axios.post('https://interview.adpeai.com/api/v1/submit-task', {
        id,
        result,
      }, {
        timeout: 5000,
      });
    } catch (error: any) {
      switch (error.response?.status) {
        case 400:
          throw new TaskError('Incorrect value in result; no ID specified; value is invalid', 400);
        case 404:
          throw new TaskError('Value not found for specified ID', 404);
        case 503:
          throw new TaskError('Error communicating with database', 503);
        default:
          throw new TaskError('Something wrong happened', 400);
      }
    }
  }
}
