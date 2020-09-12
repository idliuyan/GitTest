import mine from "./mine";

let classify = {
  namespaced: true,
  state: {   //数据的存储地
    age: 18
  },
  mutations:{   //g更改state的地方
    changeAge(state){
      state.age =  19
    }
  },
  actions:{
    changeAgeAction( context ){
      console.log(context)
      context.rootState.mine.name = 'idhorse';
      // console.log('cls',context.rootState.mine.name);
      context.commit('changeAge')
    }
  }
};

export  default classify;
