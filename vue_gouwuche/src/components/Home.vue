<template>
  <div class="home">
    <div class="home_list">
       <ul>
         <li v-for="item,index in productList" :key="item.pid">
              <p>{{item.title}} ----> {{item.price}}</p>
              <p>{{item.num}}</p>
              <p>
                <button @click="add(item.pid)" style="width: 42px">+</button>
                <button @click="del(item.pid)" style="width: 42px">-</button>
              </p>
         </li>
       </ul>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
export default {
  name: 'Home',
  methods:{

    ...mapActions({
      add: 'addAction',
      del: 'delAction',
    })
  },
  computed:{
    ...mapState(['productList'])
  }

}
</script>

<style scoped>
  .home{
    font-size: 28px;
  }
  .home_list ul li{
    display: block;
    margin: 15px;
  }
</style>
