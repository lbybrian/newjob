<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div style="width: 600px;height: 400px;border: 1px solid red;">
		  <span style="font-size: 30px;">父组件区域：</span>
		  <div>传给子组件的值【toChildrenData】：{{toChildrenData}}</div>
		  <div>
		    <ab :toChildrenData="toChildrenData"></ab>
		  </div>
		</div>
  </div>
</template>
<script>
	export default{
		data () {
		  // 这里存放数据
		  return {
		    toChildrenData: {
		      name: '李四',
		      age: 22
		    }
		  }
		},
		components:{
			Ab:()=>import ('@/components/Ab.vue')
		}
	}
</script>