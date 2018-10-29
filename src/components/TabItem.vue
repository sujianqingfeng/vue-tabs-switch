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
      prefixIcon:[Object, Array, String],
      suffixIcon:[Object, Array, String] 
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
     if(this.$slots.suffix)
     this.$parent.addSlots(`suffix-${this.hash}`,this.$slots.suffix)

     if(this.$slots.prefix)
     this.$parent.addSlots(`prefix-${this.hash}`,this.$slots.prefix)
  },
};
</script>


<style lang="stylus" scoped>
.tab-item
    display flex



</style>

