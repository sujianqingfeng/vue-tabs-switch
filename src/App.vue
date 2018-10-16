<template>
  <div id="app">
 
    <tabs>
      <tab-item label='ONE'> fff</tab-item>
    </tabs>
  </div>
</template>

<script>
import Tabs from './components/Tabs.vue'
import TabItem from './components/TabItem.vue'

export default {
  name: 'app',
  components: {
    Tabs,
    TabItem
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
