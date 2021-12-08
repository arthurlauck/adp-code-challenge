import { createServer, IncomingMessage, ServerResponse } from 'http';
import TaskController from './src/TaskController';
import TaskRequestRepository from './src/TaskRequestRepository';
import TaskService from './src/TaskService';

const hostname: string = 'localhost';
const port: number = 8000;

const server = createServer((request: IncomingMessage, response: ServerResponse) => {
    console.log('request')
    if (request.url === '/' && request.method === 'GET') {
        const taskController = new TaskController(new TaskService(new TaskRequestRepository))
        return taskController.getTaskAndCalculate(request, response)
    }

    response.end('Not found');
});

server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});