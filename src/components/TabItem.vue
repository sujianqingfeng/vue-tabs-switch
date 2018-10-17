<template>
    <div class="tab-item">
        <slot></slot>
    </div>
</template>



<script>
export default {
  name: "TabItem",
  props:{
      label:String,
      icon:String,  
  },
  mounted() {
      this.$parent.addItems(this.$props)
  },
};
</script>
