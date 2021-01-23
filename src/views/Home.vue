<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    	<router-link to="/home/vuex">子组件测试Vuex</router-link>
    	<keep-alive>
    		<router-view></router-view>
    	</keep-alive>
       <Myheader :poiInfo='poiInfo'></Myheader>
  </div>
</template>

<script>
    // 1、导入头部模块
    import Myheader from '@/components/Header.vue';
    export default {
    	name: 'Home',
    	components: { // 2、注册
    		Myheader
    	},
    	data() {
    		return {
    			// header组件需要的信息(商家信息)
    			poiInfo: {},
    			commentNum: 0,
    		}
    	},
    	mounted() { // 发起异步请求，获取数据
    		var that = this;
//  		console.log(0000000000,that==this)
    		// 通过axios发起get请求
    		this.$axios.get('http://127.0.0.1:8090/fuck').then((da)=>{
//					that.poiInfo = [...response];
					that.poiInfo = da.data.msg;
					for(let i =0;i<da.data.msg.length;i++){
						that.poiInfo=da.data.msg[i]
					}
//					console.log(da,222222222222222,that.poiInfo);
				})
    		
    		
//  			.then(function(response) { // 获取到数据
//  				console.log(response)
////  				var dataSource = response.content.data.page;
////  				if(dataSource.pageSize == 15) {
////  					that.poiInfo = dataSource.result.logger;
////  				}
//  			})
//  			.then(({response})=>{
////					this.poiInfo = [...response];
//					that.poiInfo = response;
//					console.log(JSON.stringify(response),response);//其实data.length就是pageSize
//				})
    			.catch(function(error) { // 出错处理
    				console.log(error);
    			});
    	}
    }
</script>

				
		