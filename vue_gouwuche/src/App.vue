<template>
  <div id="app">
    <router-view style="flex: 1;"></router-view>
    <footer>
      <div v-for="item,index in arr" @click="go(item.name,index)" :key="index" :class="{tabActive: showIndex === index }">
        <p><i :class="item.icon" aria-hidden="true"></i></p>
        <p>{{item.title}}</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
    name: 'App',
    data(){
        return {
            showIndex: 0,
            arr:[
              {title: '首页',name: 'Home',icon: 'fa fa-home'},
              {title: '分类',name: 'Classify',icon: 'fa fa-file-text-o'},
              {title: '购物车',name: 'Cart',icon: 'fa fa-shopping-cart'},
              {title: '我的',name: 'Mine',icon: 'fa fa-user-o'},
            ]
        }
    },
    methods: {
        go(val,index){
            this.showIndex = index
            this.$router.push({
              name:val
            })
        }
    },
}
</script>

<style scoped>

  *{
    padding: 0;
    margin: 0;
  }
  #app {
    width: 100%;
    height: 100%;
  }
  footer{
    box-shadow:  0 -2px 15px 0 #D9CEC3;
    position: fixed;
    bottom: 0;
    background-color: #ffffff;
    width: 100%;
    display: flex;
  }
  footer div{
    flex: 1;
    color: #999;
    text-align: center;
    display: inline-block;
  }
  footer div p{
    line-height: 25px;
  }
  .tabActive{
    color: #ff6700;;
  }
</style>
