<template>
  <div class="home">
    <input type="text" placeholder="Search..." v-model="searchInput" @input="searchUsers()">
    <i class="fa fa-search"></i>
      <div class="app">
        <span>Top Users</span>
      </div>
      <div v-if="this.userDetails.length > 0">
        <div class="userImage" v-for="(item,id) in userDetails" :key="id">
          <img :src="item.avatar_url !='' ? item.avatar_url : './assets/rubber-duck 1.svg'" />
          <div class="userName" @click="userData(item.login)">{{ item.login }}</div>
        </div>
      </div>
      <div v-else>
        <div class="notfound">Users not found</div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      userDetails: [],
      users: [],
      searchInput: ''
    }
  },
  async created() {
    await axios.get('https://api.github.com/users?per_page').then((response) => {
      this.userDetails = response.data
      this.users = response.data
    })
  },
  methods: {
    searchUsers() {
      this.userDetails = this.users.filter((item) => {
        return item.login.includes(this.searchInput)
      })
    },
    userData(e) {
      this.$router.push(`/${e}`)
    }
  }
}
</script>

<style>
  .home .app {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 56px;
    color: #000000;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    margin-top: 60px;
    text-align: center;
  }
.home input {
  width: 231px;
  height: 32px;
  margin-top: 0.8em;
  background-color: #FFFFFF !important;
  border-radius: 12px;
  margin-right: 2em;
  position: relative;
  float: right;
  margin-top: -4.5em;
}

.userImage {
  width: 140px;
  height: 140px;
  left: 0px;
  top: 0px;
  background: #54A3FF;
  border-radius: 50%;
  display: inline-block;
  margin: 25px 20px;
}

.userImage img {
  padding: 20px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.userName {
  cursor: pointer;
  text-align: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
}
.notfound {
  font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #000000;
    margin-top: 2em;
    margin-bottom: 2em;
}
</style>
