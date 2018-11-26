I created two components running off the home component -one for the timer functionality, 
a second for the todo list.
I didn't have time to write tests but would have written these use cases:

When timer is started, countdown displays
When timer completes, it restarts for the default break period (5 minutes)
When break timer completes, 25 minute countdown begins
Every 4 task phases, the break timer runs for 25 minutes

Additional functionality that is outside of scope: stop timer, reset timer, configure custom task and break times. Once taking user input, we would have to validate min and max values.

Todo list is not integrated with the timer, tests would be:

When item is added, it is appended to the list
When item is marked complete, it triggers an event notification

Additional changes - 
	 Better styling, incorporate angular material or component library such as Prime NG.
     Put todolist and basic timer functionality in their own modules for reuse. abstract reusable functionality into services.
	 track todo state on server side in a db, local storage was just the easiest place to maintain on refresh.
	 Model would be in separate module.
	 It's been a while since i've been coding angular - last time was right before angular 4 was released. but as i recall, this might be streamlined with observables.