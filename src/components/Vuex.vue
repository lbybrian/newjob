<template>
	<div id="vx">
		<h3>vuex{{$store.state.cs1}}</h3>
		<h3>vuex{{$store.state.cs2}}</h3>
		<h3>vuex{{$store.state.cs3}}</h3>
		<input type="button" value="VUEX三个异步方法同步执行" @click="$store.dispatch('changeALL')" /><br /><br />
		<input type="button" @click="changeAll" value="Methods">
		
	</div>
</template>

<script>
	import {mapStates,mapMutations,mapGetters,mapActions} from 'vuex'
	export default{
		data(){
			return {
				vuexState1:'',
				vuexState2:'',
				vuexState3:'',
			}
		},
		mounted(){
//			console.log(typeof this.$store.state.cs1)
		},
		methods:{
			...mapActions(['changeALL']),
			changeAll(){
				
				this.$store.dispatch('changeALL')
				this.$store.state.cs2=this.vuexState2;
				this.$store.state.cs1=this.vuexState1;
				this.$store.state.cs3=this.vuexState3;
//				this.vuexState2=this.$store.state.cs2;
//				this.vuexState3=this.$store.state.cs3;
				console.log(this)
			}
		}
	}
</script>

<style>
</style>