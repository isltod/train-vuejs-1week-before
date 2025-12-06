<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding1">Data Binding 1</router-link> |
    <router-link to="/databinding2">Data Binding 2</router-link><br />
    <router-link to="/databindinglist">Data Binding List</router-link><br />
    <router-link to="/componentexample">Component Example</router-link><br />
    <router-link to="/parentcomponent">Parent Component</router-link><br />
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
