import Vue from 'vue'
import Vuex from 'vuex'
import mine from './mine'
import classify from './classify'

  Vue.use(Vuex);

export default  new Vuex.Store({
  namespaced: true,
  state: {   //数据的存储地
    age: 500,
    productList:  [
      {
        pid: 0,
        title: '小米',
        price: 100,
        num: 0
      },
      {
        pid: 1,
        title: '中米',
        price: 500,
        num: 0
      },
      {
        pid: 2,
        title: '大米',
        price: 1000,
        num: 0
      }
    ]
  },
  mutations:{   //更改state的地方
     add(state,pid){
       ++state.productList[pid].num
     },
     del(state,pid){
       --state.productList[pid].num
     }
  },
  actions:{
    addAction({ commit },pid){
      // console.log(pid)
       commit('add',pid)
    },
    delAction({ commit,state },pid){

      if(state.productList[pid].num <=0){
        return
      }
      commit('del',pid)
    },
    changeAgeAction({ commit }){
      console.log('this is root ');
    }
  },
  getters:{
     cart(state){
       // console.log(state.productList);
       let arr = [];
       state.productList.filter(function (item) {
          if(item.num>0){
            arr.push(item)
          }
       });
        return arr;
     },
     sum(state){
       let sum = 0;
       state.productList.filter(function (item) {
         if(item.num>0){
            sum += item.num * item.price;
         }
       });
       // sum为0
       return sum;
     }
  },
  modules:{
     mine,
     classify
  }
})
