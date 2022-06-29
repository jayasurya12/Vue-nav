<template>
  <li class="text-bold list-group-item d-flex justify-content-between text-center">
    <span class="togle" 
    v-bind:class="className"
    @click="$emit('completed')">
        <i class="bi bi-circle"></i> {{task.task}}
    </span>
    <span class="input-group-append btn btn-outline-secondary bg-success text-light"
    @click="$emit('remove')"
    ><i class="bi bi-trash "></i></span>
  </li>
</template>

<script>
export default {
name:'Task-item',
props:['task'],
computed:{
    className(){
        let classes=['toggle'];
        if(this.task.completed){
            classes.push('toggle-completed text-danger text-muted')
        }
        return classes;
    }
}
}
</script>
