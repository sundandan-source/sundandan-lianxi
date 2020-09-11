<template>
<div>Login

    <input type="text" name="" id="" v-model="username">
    <input type="text" name="" id="" v-model="passwored">
    <button @click="login">登录</button>
</div>
</template>

<script>
import {
    mapMutations
} from 'vuex'
export default {
    data() {
        return {
            username: '',
            passwored: '',

        }
    },
    methods: {
        login() {
            this.$http.post('/api/login', {
                username: this.username,
                passwored: this.passwored
            }).then((res) => {
                console.log('login', res)
                if (res.code === 0) {
                    this.$router.push('/home')
                } else {
                    alert(res.message)
                }
            })
        },
        ...mapMutations(['SET_TOKEN'])
    }
}
</script>

<style>

</style>
