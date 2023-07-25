({
    addTask : function(component) {
        var taskList = component.get("v.tasks");
        var newTask = component.get("v.newTask");
        
        if(newTask){
            taskList.push(newTask);
            component.set("v.tasks", taskList);
            component.set("v.newTask", "");
        }
    }
})