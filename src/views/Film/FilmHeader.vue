<template>
  <div>
    <ul>
      <router-link to="/film/nowplaying" tag="li" active-class="active">正在热映</router-link>
      <router-link to="/film/comingsoon" tag="li" active-class="active">即将上映</router-link>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "FilmHeader"
    }
</script>

<style scoped>
  ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    height: 50px;

  }
  ul>li{
    font-size: 20px;
    color: #666666;
  }
  .active{
    color: red;
  }
  .fixed{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
  }

</style>