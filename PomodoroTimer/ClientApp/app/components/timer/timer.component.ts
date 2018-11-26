import { Component } from '@angular/core';

@Component({
    selector: 'timer',
    templateUrl: './timer.component.html'
})
export class TimerComponent {
    public taskMinutes = 25;
	public shortBreakMinutes = 5;
	public longBreakMinutes = 25;
	public longBreakInterval = 4;
	public currentPhase = "Task";
	public remainingMinutesText = "25";
	public remainingSecondsText = "00";
	public completedTaskPhases = 0;

	public startTimer() {
		this.runTimer("Task", this.taskMinutes * 60);	
	}

	public runTimer(phase: string, secondsRemaining: number) {
		this.updateTimerDisplay(secondsRemaining);
		this.currentPhase = phase;
		var countdown = setTimeout(() => {
			secondsRemaining -= 1;
			if (secondsRemaining > 0) {
				this.runTimer(phase, secondsRemaining);
			}
			else {
				clearTimeout(countdown);
				if (this.currentPhase === "Task") {
					setTimeout(()=> alert("Time for a break"),0);
					this.completedTaskPhases += 1;
					var breakMinutes = (this.completedTaskPhases % this.longBreakInterval) === 0 ? this.longBreakMinutes : this.shortBreakMinutes;
					this.runTimer("Break", breakMinutes * 60);
				}
				else {
					setTimeout(() => alert("Break over, start another task."),0);
					this.runTimer("Task", this.taskMinutes * 60);
				}
			}
		},1000);
	};

	public updateTimerDisplay(secondsRemaining: number) {
		var minutes = Math.floor(secondsRemaining / 60);
		var seconds = Math.floor(secondsRemaining % 60);
		this.remainingMinutesText = (minutes < 10 ? "0" : "") + minutes;
		this.remainingSecondsText = (seconds < 10 ? "0" : "") + seconds;
		return;
	};
}
