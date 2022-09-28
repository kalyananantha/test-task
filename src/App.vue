<template>
  <div id="app">
    <Header />
    <router-view class="content"/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  methods: {
  }
}
</script>

<style>
.content {
  margin-top: 70px;
}
</style>
