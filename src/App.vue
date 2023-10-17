<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="page">
  <div class="content">
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="自习室" />

      <nav>
        <RouterLink to="/">主页</RouterLink>
        <RouterLink to="/about">专注</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView class="tools" />
  </div>
  <div class="fill"></div>
  </div>
  <img class="wallpa" src="https://img.zhuayuya.com/wallpaper/img/wallpa_img_1003.jpg">
</template>

<style scoped>
.page {
  scroll-snap-type: y proximity;
  overflow-y: scroll;
  height: 100vh;
  width: 100vw;
  scrollbar-width: none;
}
.page::-webkit-scrollbar {
  width:0;
}
.page > div {
  scroll-snap-align: center;
}

.content {
  display: flex;
  height: 100vh;
}

header {
  line-height: 1.5;
  width: 50%;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.tools {
  width: 50%;
}

.fill {
  width: 100%;
  height: 100vh;
}

.wallpa {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  height: 100%;
  z-index: -100;
  object-fit: cover;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
