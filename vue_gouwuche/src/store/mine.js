let mine = { //自己定义了一个名为mine的模块
  namespaced: true,
  state: {   //数据的存储地
     name: 'mine'
  },
  mutations:{   //g更改state的地方
     changeName(state){
       state.name = 'idhorse'
     }
  },
  actions:{
    changeNameAction({ commit }){
       commit('changeName')
    },
    changeAgeAction({ commit }){
      console.log('this is mine')

    }

  },
  modules:{
    'mine1': {
      namespaced: true,
      state: {
        a: 'mine111111'
      },
      actions:{
        changeA(){
          console.log('this is mine min1 changeA')
        }
      }
    }
  }
};
export  default mine;
