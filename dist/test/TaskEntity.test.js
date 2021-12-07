"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TaskEntity_1 = __importDefault(require("../src/TaskEntity"));
test("Inicializar uma task entity", function () {
    const id = '54a7dab4-a04a-41dc-ac86-1f6c8847cd66';
    const operation = 'addition';
    const left = 7468248643685997;
    const right = -2475768253056459;
    const task = new TaskEntity_1.default(id, operation, left, right);
    expect(task.id).toBe(id);
    expect(task.operation).toBe(operation);
    expect(task.left).toBe(left);
    expect(task.right).toBe(right);
});
test('Calculo adição da task', function () {
    const id = '54a7dab4-a04a-41dc-ac86-1f6c8847cd66';
    const operation = 'addition';
    const left = 7468248643685997;
    const right = -2475768253056459;
    const task = new TaskEntity_1.default(id, operation, left, right);
    console.log(task.calculate());
});
