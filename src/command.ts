/* eslint-disable no-console */
import TaskService from './application/service/TaskService';
import InfiniteSemaphore from './domain/service/InfiniteSemaphore';
import TaskCommand from './infra/Command/TaskCommand';
import TaskRequestRepository from './infra/repository/TaskRequestRepository';

// arguments of task passed, like ts-node ./src/command.ts <task name>
const args: Array<String> = process.argv.slice(2);

if (args[0] === 'task') {
  console.log('Running task command');

  // eslint-disable-next-line func-names
  (async function () {
    const semaphore = new InfiniteSemaphore(async () => {
      const taskCommand = new TaskCommand(new TaskService(new TaskRequestRepository()));
      await taskCommand.getTaskAndCalculateCommand();
    }, 3);
    semaphore.start();
  }());
}
