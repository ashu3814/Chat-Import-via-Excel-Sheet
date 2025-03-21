import { Controller, Get, Query } from "@nestjs/common";

const tesks = [
    {id: 1 , title : "Task 1", status: "pending"},
    {id: 2 , title : "Task 2", status: "pending"},
    {id: 3 , title : "Task 3", status: "pending"} 
];


@Controller('tasks')
export class TaskController{
    @Get()
    getTasks(@Query('status') status: string){
        return status ? tesks.filter(task => task.status === status) : tesks

    }

}