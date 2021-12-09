import TaskEntity from "../../domain/entity/TaskEntity";
import axios from 'axios';
import TaskRepository from "../../domain/repository/TaskRepository";
import TaskError from "../../application/exception/TaskError";

export default class TaskRequestRepository implements TaskRepository {
    async getTask(): Promise<TaskEntity> {
        const { data } = await axios.get('https://interview.adpeai.com/api/v1/get-task')
        return new TaskEntity(data.id, data.operation, data.left, data.right)
    }

    async submitTask(id: string, result: number): Promise<void> {
        try {
            await axios.post('https://interview.adpeai.com/api/v1/submit-task', {
                id: id,
                result: result
            })
        } catch (error: any) {
            switch (error.response?.status) {
                case 400:
                    throw new TaskError('Incorrect value in result; no ID specified; value is invalid', 400)
                case 404:
                    throw new TaskError('Value not found for specified ID', 404)
                case 503:
                    throw new TaskError('Error communicating with database', 503)
                default:
                    throw new TaskError('Something wrong happened', 400)
            }
        }
    }
}