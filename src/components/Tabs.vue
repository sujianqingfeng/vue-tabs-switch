<template>
    <div class="tabs">

        <div class="header">
            <ul>

                <li :class="{check:check==item.hash}" v-for="(item,index) in items" :key="index" @click="handleClick(item.hash)">

                    <slot :name="'prefix-'+item.hash">
                        <font-awesome-icon v-show="item.prefixIcon" :icon="item.prefixIcon" />
                    </slot>
                    <span class="label">{{item.label.toUpperCase()}}</span>
                    <slot :name="'suffix-'+item.hash">
                        <font-awesome-icon v-show="item.suffixIcon" :icon="item.suffixIcon" />
                    </slot>
                </li>

            </ul>
        </div>

        <div class="content">

            <slot />
        </div>
    </div>
</template>


<script>
export default {
    name: "Tabs",
    data: () => ({
        items: [],
        check: 0
    }),
    created() {
        this.items = this.$children;
    },
    computed: {

    },
    mounted() {
        this.check = this.items[0].hash;
        this.items[0].isVisible = true;
    },
    methods: {
        findTab(hash) {
            return this.items.find(value => value.hash === hash);
        },
        handleClick(hash) {
            let item = this.findTab(hash);
            item.isVisible = true;
            this.check = hash;

            this.items.forEach(tab => {
                tab.isVisible = tab.hash == hash;
            });
        },
        addSlots(key, solts) {
            this.$slots[key] = solts

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
            padding-left 0px
            li
                display flex
                align-items center
                justify-content center
                height 100%
                color #646464
                padding-left 10px
                padding-right 10px
                font-weight bold
                position relative
                &:hover:after
                    opacity 1
                    transform scaleX(1)
                    transition 0.2s ease-in-out
                &:after
                    content ''
                    position absolute
                    left 0
                    bottom -2px
                    width 100%
                    color #2f2f2f
                    opacity 0
                    border-bottom 2px solid #646464
                    transform scaleX(0)
                &.check
                    border-bottom 2px solid #646464
                    color #2f2f2f
                .label
                    margin 0px 8px
    .content
        margin-top 16px
</style>



