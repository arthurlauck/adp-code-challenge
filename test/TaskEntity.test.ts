import TaskEntity from '../src/domain/entity/TaskEntity';

describe('Task Entity test', () => {
  test('Create task entity', () => {
    const id = '54a7dab4-a04a-41dc-ac86-1f6c8847cd66';
    const operation = 'addition';
    const left = 7468248643685997;
    const right = -2475768253056459;

    const task = new TaskEntity(id, operation, left, right);

    expect(task.id).toBe(id);
    expect(task.operation).toBe(operation);
    expect(task.left).toBe(left);
    expect(task.right).toBe(right);
  });

  test('Addition task calculate', () => {
    const id = '54a7dab4-a04a-41dc-ac86-1f6c8847cd66';
    const operation = 'addition';
    const left = 7468248643685997;
    const right = -2475768253056459;

    const result = 4992480390629538;

    const task = new TaskEntity(id, operation, left, right);

    expect(task.calculate()).toBe(result);
  });

  test('Remanider task calculate', () => {
    const id = '54a7dab4-a04a-41dc-ac86-1f6c8847cd66';
    const operation = 'remainder';
    const left = 8340236927590209;
    const right = 7879619823045929;

    const result = 460617104544280;

    const task = new TaskEntity(id, operation, left, right);

    expect(task.calculate()).toBe(result);
  });

  test('Division task calculate', () => {
    const id = '54a7dab4-a04a-41dc-ac86-1f6c8847cd66';
    const operation = 'division';
    const left = 8297318821726281;
    const right = -7050063689538775;

    const result = -1.1769140233496391;

    const task = new TaskEntity(id, operation, left, right);

    expect(task.calculate()).toBe(result);
  });

  test('Subtraction task calculate', () => {
    const id = '54a7dab4-a04a-41dc-ac86-1f6c8847cd66';
    const operation = 'subtraction';
    const left = -8184183537320767;
    const right = -5683285155429687;

    const result = -2500898381891080;

    const task = new TaskEntity(id, operation, left, right);

    expect(task.calculate()).toBe(result);
  });

  test('Multiplication task calculate', () => {
    const id = '54a7dab4-a04a-41dc-ac86-1f6c8847cd66';
    const operation = 'multiplication';
    const left = 2071305629208317;
    const right = 6579063474960193;

    const result = 1.362725121060388e+31;

    const task = new TaskEntity(id, operation, left, right);

    expect(task.calculate()).toBe(result);
  });
});
