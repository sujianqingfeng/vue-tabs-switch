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
