export default class InfiniteSemaphore {
  private startCount: number;

  private resolvers: Array<any> = [];

  constructor(private readonly callBack: Function, private readonly count: number = 1) {
    this.startCount = count;
  }

  start() {
    // starts with the number passed
    for (let i: number = 0; i < this.count; i += 1) {
      this.use();
    }
  }

  private aquire() {
    return new Promise<void>((resolve) => {
      if (this.startCount > 0) {
        // verify if there is room to run
        resolve();
        this.startCount -= 1;
      } else {
        // run later, waiting for a request to finnish
        this.resolvers.push(resolve);
      }
    });
  }

  private free() {
    // instanciate new, to be infinite
    this.use();

    // resolve next
    this.resolvers.shift()();
  }

  private async use() {
    await this.aquire();
    await this.callBack();
    this.free();
  }
}
