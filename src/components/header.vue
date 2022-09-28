<template>
  <div class="mainHeader">
      <div class="leftContent">
        <img src="../assets/Vector.svg" @click="clicked()"/>
        <span>Github Userboard</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      
    }
  },
  methods: {
    clicked() {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.mainHeader {
  position: fixed;
  width: 100%;
  height: 60px;
  left: 0px;
  top: 0px;
  background: #24292F;
  box-shadow: 0px 12px 36px rgba(204, 204, 204, 0.25);
}

.leftContent {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.7em;
  margin-left: 2em;
}

.leftContent img {
  cursor: pointer;
}

.leftContent span {
  width: 158px;
  height: 23px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #FFFFFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex: none;
  order: 1;
  flex-grow: 0;
  margin-left: 0.8em;
}
</style>