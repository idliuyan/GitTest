<template>
    <div id="cart">
      <ul>
        <li  v-for="item,index in cart" :key="index" style="margin: 15px">
          <p>商品名称：{{item.title}}</p>
          <p>商品数量：
            <button @click="del(item.pid)" style="width: 42px">-</button>
            {{item.num}}
            <button @click="add(item.pid)" style="width: 42px">+</button>
          </p>
          <p>商品价格：{{item.price}}</p>
        </li>
      </ul>

       <div style="margin-top: 20px" v-show="sum">
          {{sum}}
       </div>
      <div  v-show="!sum ">
        购物车为空等待你去剁手！
      </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: "Cart",
        mounted(){
          // console.log(this.$store.state.productList);
          console.log(this.$store.getters.cart);
        },
        methods:{
          ...mapActions({
            add: 'addAction',
            del: 'delAction',
          })
        },
        computed:{
          ...mapGetters(['cart','sum'])
        }
    }
</script>

<style scoped>
 #cart{
   font-size: 36px;
 }
</style>
