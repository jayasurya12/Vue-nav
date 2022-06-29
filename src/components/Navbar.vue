<template>
<div>
  <nav class="navbar navbar-dark bg-success navbar-expand-sm">
    <div class="container">
        <router-link to='/' class="navbar-brand">Vue Router</router-link>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to='/' class="nav-link px-4">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to='/todo' class="nav-link px-4">Todo-List</router-link>
                </li>
                <li class="nav-item">
                    <router-link to='/about' class="nav-link px-4">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link to='/weather' class="nav-link px-4">Weather</router-link>
                </li>
            </ul>
        </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {
    name:'App',
}
</script>

<style>

</style>