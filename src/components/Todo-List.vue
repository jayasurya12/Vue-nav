<template>
<div class="container mt-3">
  <div class="card col-8 m-10">
    <div class="card-body">
      <div class="card-title h3 text-center text-success">Todo List</div>
        <div class="input-group mb-3">
          <input type="text" 
          class="form-control col-3" 
          v-model="newTask" 
          @keyup.enter="addTask"
          placeholder="Enter Your Todo" 
          aria-label="Enter Your Todo">
          <button 
          class="input-group-append btn btn-outline-secondary col-2 bg-success text-light"
          @click="addTask"
          >Add</button>
        </div>
        <div class="card-text h6 text-success row">
          <div class="">
            <ul class='list-group'>
              <Task 
                v-bind:task="task"
                v-for="(task,index) in tasks" 
                :key="task.id"
                @remove="removeItem(index)"
                @completed="completedItem(task)"
              ></Task>
            </ul>
          </div>
          <div class="d-flex justify-content-around">
            <button class="btn btn-info mt-3" @click="clearCompleted">Clear Components</button>
            <button class="btn btn-danger mt-3" @click="clear">Clear All Data</button>
          </div>
          <p class="text-bold text-success mt-3 text-center">InCompleted Tasks : {{inComplete}}</p>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import Task from './Task-item.vue'
export default {
  name:"todo-list",
    data(){
    return{
        tasks:[
          {
            id:1,
            task:"Learning Projects",
            completed:false
          },
          {
            id:2,
            task:"Learning Vue JS",
            completed:false
          },
          {
            id:4,
            task:"Learning React JS",
            completed:false
          },
          {
            id:4,
            task:"Learning Angular 9",
            completed:false
          }
        ]
    }
  },
  components:{
    Task
  },
  computed:{
    inComplete(){
      return this.tasks.filter(this.inProgress).length;
    }
  },
  methods:{
    addTask(){
      if(this.newTask){
        console.log(this.newTask);
        this.tasks.push({
          task:this.newTask,
          completed:false
        });
        this.newTask='';
      }
    },
    clear(){
      this.tasks=[];
    },
    
    inCompleted(task){
      return task.completed;
    },
    inProgress(task){
      return !this.inCompleted(task)
    },
    clearCompleted(){
      return this.tasks=this.tasks.filter(this.inProgress);
    },
    removeItem(index){
      return this.tasks.splice(index,1);
    },
    completedItem(task){
      return task.completed=!task.completed;
    }
  }
}
</script>