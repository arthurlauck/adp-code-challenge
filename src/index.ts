import { createServer, IncomingMessage, ServerResponse } from 'http';
import TaskService from './application/service/TaskService';
import TaskController from './infra/controller/TaskController';
import TaskRequestRepository from './infra/repository/TaskRequestRepository';

const port: number = 8000;

const server = createServer((request: IncomingMessage, response: ServerResponse) => {
  // set default content type as json
  response.setHeader('Content-Type', 'application/json');

  if (request.url === '/' && request.method === 'GET') {
    const taskController = new TaskController(new TaskService(new TaskRequestRepository()));
    return taskController.getTaskAndCalculate(request, response);
  }

  response.statusCode = 404;
  return response.end(JSON.stringify({
    message: 'Not found',
  }));
});

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}`);
});
