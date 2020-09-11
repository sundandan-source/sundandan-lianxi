<template>
<div id="app">

    <div id="nav">
        <router-link to="/home">Home</router-link>
        <router-link to="/about">About</router-link>
           <router-link to="/my">wode </router-link>
    </div>
    <main>

        <transition name="fade">
            <router-view />
        </transition>
    </main>

</div>
</template>

<style lang="scss">
* {
    padding: 0;
    margin: 0;
    list-style: none;
}
img{
        margin: 10px;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
    }

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 10px;
    display: flex;
    justify-content: space-around;
    background: pink;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
