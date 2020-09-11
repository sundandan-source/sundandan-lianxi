<template>
<div>

    id: {{$route.params.id}}
    <ul>
        <li v-if='item'>
            <img v-lazy="item.img" alt="">
            name:{{item.name}}<br>
        </li>
    </ul>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'
export default {
    data() {
        return {
            item: {}
        }
    },
    created() {

        this.item = this.list.find((item) => {
            return item.id + '' === this.$route.params.id + ''
        })

    },
    computed: {
        ...mapState(['list'])
    },

}
</script>

<style>

</style>
