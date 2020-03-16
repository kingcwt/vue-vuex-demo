<template>
<!--    声明式导航-->
    <nav>
        <ul>
<!--            <li>-->
<!--                <a href="#/film">film</a>-->
                <router-link to="/film" tag="li" active-class="myactive">
                  <i class="iconfont icon-dianying"></i>
                  <span>film</span>
                </router-link>
<!--            </li>-->
<!--            <li>-->
<!--                <a href="#/cinema">cinema</a>-->
                <router-link to="/cinema" tag="li" active-class="myactive">

                  <i class="iconfont icon-yingyuan"></i>
                  <span>cinema</span>
                </router-link>

<!--            </li>-->
<!--            <li>-->
<!--                <a href="#/center">center</a>-->
                <router-link to="/center" tag="li" active-class="myactive">
                   <i class="iconfont icon-wode"></i>
                  <span>center</span>
                </router-link>

<!--            </li>-->
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "Tabbar"
    }
</script>

<style scoped>
 .myactive{
     color: salmon;
 }
  nav{
    position: fixed;
    bottom: 0;
    z-index: 99;
    width: 100%;
  }
  ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50px;
    background: #fff;
    border-top: 1px solid #eee;
  }
  li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  i{
    font-size: 22px;

  }
</style>