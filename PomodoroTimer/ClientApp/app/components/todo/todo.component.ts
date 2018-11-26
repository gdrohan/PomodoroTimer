import { Component, OnInit } from '@angular/core';
import { ToDoModel } from './todo.model';

@Component({
	selector: 'todo',
	styleUrls: ['./todo.component.css'],
    templateUrl: './todo.component.html'
})
export class ToDoComponent implements OnInit {

	public tasks: Array<ToDoModel> = [];

	ngOnInit() {
		var todoListString = localStorage.getItem("todoList");
		if (todoListString) {
			this.tasks = JSON.parse(todoListString);
		}
	}

	public onTaskAdded(description: string) {
		var todo = new ToDoModel();
		todo.id = "td-" + Math.random().toString(36);	
		todo.description = description;	
		this.tasks.push(todo);
		localStorage.setItem("todoList", JSON.stringify(this.tasks));
	};

	public updateTask(id: string) {
		var task = this.tasks.find((task) => {
			return task.id === id;
		});
		if (task) {
			task.completed = !task.completed;
			localStorage.setItem("todoList", JSON.stringify(this.tasks));
		}
	};
}
