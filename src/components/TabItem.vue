<template>
    <div class="tab-item">
        <slot></slot>
    </div>
</template>



<script>
export default {
  name: "TabItem",
  props:{
      label:String
  }
};
</script>
