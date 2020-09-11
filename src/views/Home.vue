<template>
<div class="home">
    <div v-show="loading">loading</div>

    <ul v-show="!loading">
        <li v-for="(item,index) in list" :key="index" @click="goTo(`/xq/`+item.id)">
            <img v-lazy="item.img" />
            {{item.id}}

            <p v-if="item.hasActivities">有活动</p>
            <p v-if="!item.hasActivities">没活动</p>
        </li>
    </ul>
</div>
</template>

<script>
import {
    mapState,
    mapActions
} from "vuex";

export default {
    data() {
        return {};
    },

    components: {},
    created() {
        this.getList();
    },
    computed: {
        ...mapState(["list", "loading"]),
    },
    methods: {
        goTo(url) {
            this.$router.push(url)
        },

        ...mapActions(["getList", "SET_LOADING"]),
    },
};
//dispath点上方法
</script>

<style>

</style>
