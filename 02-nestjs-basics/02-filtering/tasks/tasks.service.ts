import {Injectable} from "@nestjs/common";
import {Task, TaskStatus} from "./task.model";
import TasksQuery from "./tasks.query";

@Injectable()
export class TasksService {
    private tasks: Task[] = [
        {
            id: "1",
            title: "Task 1",
            description: "First task",
            status: TaskStatus.PENDING,
        },
        {
            id: "2",
            title: "Task 2",
            description: "Second task",
            status: TaskStatus.IN_PROGRESS,
        },
        {
            id: "3",
            title: "Task 3",
            description: "Third task",
            status: TaskStatus.COMPLETED,
        },
        {
            id: "4",
            title: "Task 4",
            description: "Fourth task",
            status: TaskStatus.PENDING,
        },
        {
            id: "5",
            title: "Task 5",
            description: "Fifth task",
            status: TaskStatus.IN_PROGRESS,
        },
    ];

    getFilteredTasks(
        {status, limit = 10, page = 1}: TasksQuery
    ): Task[] {
        let start = (page - 1) * limit;
        let tasks = status ? this.tasks.filter(item => item.status === status) : this.tasks;
        tasks = tasks.slice(start, start + limit);
        return tasks
    }
}
