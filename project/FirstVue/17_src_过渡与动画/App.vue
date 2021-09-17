<template lang="">
	<div>
		<Test/>

		<hr>
		<Test2/>
		<hr>
		<Test3/>
	</div>
</template>
<script>
import Test from './components/test'
import Test2 from './components/test2'
import Test3 from './components/testAnimateCss'
export default {
	name: 'app',
	components: {Test,Test2,Test3}

}
</script>
<style lang="css">
	
</style>