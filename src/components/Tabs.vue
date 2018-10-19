<template>
    <div class="tabs">

        <div class="header">
            <ul>
                <li :class="{check:check==item.hash}" v-for="(item,index) in items" :key="index" @click="handleClick(item.hash)">
                    {{item.label.toUpperCase()}}
            
                </li>
            </ul>
        </div>

        <div class="content">
           
        <slot></slot>
        </div>
    </div>
</template>



<script>
export default {
  name: "Tabs",
  data:()=>({
      items:[],
      check:0
  }),
  created(){
      this.items = this.$children
     
  },
  mounted(){
        this.check = this.items[0].hash
        this.items[0].isVisible = true
  },
  methods:{
      aaa(){

          console.log(this)
          console.log(this.$slots)
          console.log(this.items)
            // this.$children.push(this.items[0])
        
      },

      findTab(hash){
         return this.items.find(value=>value.hash === hash)
      },
      handleClick(hash){
          let item =  this.findTab(hash)
          item.isVisible = true
          this.check = hash
        

            this.items.forEach(tab=>{
                tab.isVisible = (tab.hash == hash)
            })


      }
  }
};
</script>

<style lang="stylus" scoped>
.tabs
    
    .header
        

        height 30px
        ul
            display flex
            height 100%
            // border-bottom 1px solid #969696
            li 
                display flex
                align-items center
                height 100%
                // flex 1
                color #646464
                padding-left 10px
                padding-right 10px

                
                
                font-weight bold
                &:hover 
                    color #2f2f2f
                    border-bottom 2px solid #646464
                &.check
                    border-bottom 2px solid #646464
                    color #2f2f2f
                    
            
    .content
        margin 20px
        
        // background-color gray 
</style>



