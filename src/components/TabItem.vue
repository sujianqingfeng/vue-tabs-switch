<template>
    <div class="tab-item" v-show="isVisible">
        <slot></slot>
    </div>
</template>



<script>
export default {
  name: "TabItem",
  props:{
      label:{
          type:String,
          required:true
      },
      icon:String,  
  },
  data:()=>({
      isVisible:false
  }),
  computed:{
      hash(){
          return this.label.toLowerCase()
      }
  },
  mounted() {
     
  },
};
</script>


<style lang="stylus" scoped>
.tab-item
    display flex



</style>

