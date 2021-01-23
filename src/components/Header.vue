<template>
	<div class="header">Header{{hehe}}
	    <div class="top-wrapper"></div>
	    <div class="content-wrapper"></div>
	    <div class="bulletin-wrapper"></div>
	    <div class="bg-wrapper"></div>
	    <!--{{poiInfo}}-->
	    <div v-for="item in poiInfo">wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
	    	<h3>公司名：{{item.companyFullName}}</h3>
	    	<h3>发布时间：{{item.createTime}}</h3>
	    	<h3>地址：{{item.city}}</h3>
	    	<h3>薪资：{{item.salary}}</h3>
	    	<hr />
	    </div>
	    
	    在此验证了“Vue”的虚拟DOM操作
    </div>
</template>

<script>
	import {mapActions} from 'vuex'
    export default {
    	name:"Header",
    	data(){
    		return{
    			hehe:"作为home子组件非路由组件使用/实际并不应以路由渲染",
    			alldata:[]
    		}
    	},
	    props: {
	      poiInfo:{}
	    },
	    mounted(){
//	    	console.log(poiInfo)
	    },
	    methods:{
	    	changeActionOne(){
	    		mapActions.['chnageOne']
	    	}
	    }
    };
</script>

<style>
</style>