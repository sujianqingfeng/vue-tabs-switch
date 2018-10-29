<template>
  <div id="app">

    <tabs>
      <tab-item label='ONE' :prefix-icon="['fas','coffee']"> 我是内容ONE</tab-item>
      <tab-item label='Two' prefix-icon="angry"> 我是内容Two</tab-item>
      <tab-item label='Four'>
        <template slot="prefix">
          <font-awesome-icon icon="dizzy" />
        </template>
        我是内容Four
      </tab-item>
    </tabs>

    <tabs>
      <tab-item label='ONE' :suffix-icon="['fas','coffee']"> 我是内容ONE</tab-item>
      <tab-item label='Two' suffix-icon="angry"> 我是内容Two</tab-item>
      <tab-item label='five'>
        <template slot="suffix">
          <font-awesome-icon icon="dizzy" />
        </template>
        我是内容five
      </tab-item>
    </tabs>
  </div>
</template>

<script>
import Tabs from "./components/Tabs.vue";
import TabItem from "./components/TabItem.vue";

export default {
  name: "app",
  components: {
    Tabs,
    TabItem
  }
};
</script>

<style lang="stylus" scoped>
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
  margin-left 60px
</style>

