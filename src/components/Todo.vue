<template>
    <div class="container">
        <h3>Hi This this Todo router</h3>
        <TodoList/>
  </div>
</template>

<script>
import TodoList from './Todo-List.vue'
export default {
    name:'App',
    components:{TodoList}
}
</script>

<style>

</style>