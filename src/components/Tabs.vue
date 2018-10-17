<template>
    <div class="tabs">

        <div class="header">
            <ul>
                <li :class="{check:check==index}" v-for="(item,index) in items" :key="index" @click="handleClick(index)">{{item.label}}</li>
            </ul>
        </div>

        <div class="content">
           
        <slot></slot>
        </div>
        <!-- {{this.items}}
         {{this.$slots.default}} -->

         <button @click="aaa">aaa</button>
    </div>
</template>



<script>
export default {
  name: "Tabs",
  data:()=>({
      items:[],
      check:0
  }),
  mounted(){

  },
  methods:{
      aaa(){

          console.log(this)
          console.log(this.$slots)
          console.log(this.items)
            // this.$children.push(this.items[0])
        
      },
      handleClick(index){
          console.log(index)
          this.check = index
      },
      addItems(item){
           const index = this.$slots.default.indexOf(item.$vnode);
           console.log(index)
        //   this.items.splice(index, 0, item);
        this.items.push(item)
      }
  }
};
</script>

<style lang="stylus" scoped>
.tabs
    
    .header
        border-bottom 1px solid #969696

        height 30px
        ul
            display flex
            height 100%
            li 
                display block
                height 100%
                flex 1
                color #646464
                
                font-weight bold
                &:hover 
                    color #2f2f2f
                    border-bottom 2px solid #646464
                &.check
                    border-bottom 2px solid #646464
                    color #2f2f2f
                    
            
    .content
        margin 20px
        background-color gray 
</style>



