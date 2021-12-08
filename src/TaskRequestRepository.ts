import TaskEntity from "./TaskEntity";
import axios from 'axios';
import TaskRepository from "./TaskRepository";

export default class TaskRequestRepository implements TaskRepository {
    async getTask(): Promise<TaskEntity> {
        const { data } = await axios.get('https://interview.adpeai.com/api/v1/get-task')
        return new TaskEntity(data.id, data.operation, data.left, data.right)
    }

    async submitTask(id: string, result: number): Promise<void> {
        console.log('submit task')
        try {
            const { data } = await axios.post('https://interview.adpeai.com/api/v1/submit-task', {
                id: id,
                result: result
            })
        } catch (error) {
            console.error(error)
        }
    }
}