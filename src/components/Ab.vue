<template>
  <div class="" style="width: 400px;height: 300px;margin: 30px auto;border: 1px solid #0000ff">
    <span style="font-size: 30px;">子组件区域：</span>
    <div>父组件传过来的值【toChildrenData】：{{toChildrenData}}</div>
    <input type="text" v-model="toChildrenData.name">
  </div>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		},
		props: {
		  toChildrenData: {
		    type: Object,
		    default:null
		  }
		},
	}
</script>

<style>
</style>



