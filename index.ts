import { createServer, IncomingMessage, ServerResponse } from 'http';
import TaskRequestRepository from './src/TaskRequestRepository';
import TaskService from './src/TaskService'

const hostname: string = 'localhost';
const port: number = 8000;

const server = createServer((request: IncomingMessage, response: ServerResponse) => {
    const taskRespository = new TaskRequestRepository
    const teste = new TaskService(taskRespository)
    teste.getTaskAndCalculate()

    response.end('Hello world!');
});

server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});