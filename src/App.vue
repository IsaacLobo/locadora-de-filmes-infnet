<template>
  <div id="app">
    <Header/>
    <b-container>
       <Home/>
    </b-container>
  </div>
</template>

<script>

import Header from "./components/Header.vue"
import Home from './components/Home.vue'

export default {

  name: 'App',
  components: {Home, Header}, 

}
</script>

<style>
#app{
  margin: 40px;
  font-family: 'Inconsolata', monospace;
}
.cards{
  justify-content: space-between;
  text-align: center;
}
h1 {
  text-align: center;
  padding: 24px;
}
</style>
