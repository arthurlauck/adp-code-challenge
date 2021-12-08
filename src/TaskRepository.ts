import TaskEntity from "./TaskEntity";

export default interface TaskRepository {
    getTask(): Promise<TaskEntity>

    submitTask(id: string, result: number): Promise<void>
}