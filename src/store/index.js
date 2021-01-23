import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	cs1:'state1111111111',
  	cs2:'state2222222222',
  	cs3:'state3333333333',
  },
  mutations: {
  	CHANGE_ONE(state){
  		state.cs1='1变'
  	},
  	CHANGE_TWO(state){
  		state.cs2='2变'
  	},
  	CHANGE_THREE(state){
  		state.cs3='3变'
  	},
  },
  actions: {
  	getData(){
  		this.$axios.get('http://127.0.0.1:8090/fuck')
  	},
  	chnageOne({commit}){
  		commit('CHANGE_ONE')
  	},
  	changeTwo({commit}){
  		commit('CHANGE_TWO')
  	},
  	changeThree({commit}){
  		commit('CHANGE_THREE')
  	},
  	changeALL({commit}){
  		return new Promise((resolve,reject)=>{
  			resolve(commit('CHANGE_ONE'))
  		}).then(()=>{
  			commit('CHANGE_TWO')
  		}).then(()=>{
  			commit('CHANGE_THREE')
  		})
//		commit('CHANGE_TWO','CHANGE_ONE','CHANGE_THREE')
  	}
  },
  modules: {
  }
})
