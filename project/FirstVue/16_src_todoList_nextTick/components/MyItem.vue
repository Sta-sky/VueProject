<template>
	<li>
		<label>
			<input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>

			<span  v-show='!todo.isEdit'>{{todo.title}}</span>
			<input 
				v-show='todo.isEdit' 
				type="text" ref='inputVal'
				:value=todo.title 
				@blur='handlfocus(todo, $event)'
			>
		</label>
		<button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
		<button 
			class="btn btn-endit"
			@click="editTitle(todo)"
			v-show='!todo.isEdit'
		>编辑</button>
	</li>
</template>

<script>
	export default {
		name:'MyItem',
		//声明接收todo
		props:['todo'],
		methods: {
			//勾选or取消勾选
			handleCheck(id){
				//通知App组件将对应的todo对象的done值取反
				this.$bus.$emit('checkTodo', id)
			},
			//删除
			handleDelete(id){
				if(confirm('确定删除吗？')){
					//通知App组件将对应的todo对象删除
					this.$emit('deleteTodo', id, )
				}
			},
			editTitle(todo){
				if (todo.hasOwnProperty('isEdit')){
					todo.isEdit = true
				}else{
					this.$set(todo, 'isEdit', true)
				}
				this.$nextTick(function(){
					this.$refs.inputVal.focus()
				})

			},
			handlfocus(todo, event){
				todo.isEdit = false
				if(!event.target.value.trim()) return alert('数据不能为空')
				this.$bus.$emit('updateData', todo.id, event.target.value)
			}
		},
	}
</script>

<style scoped>
	/*item*/
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}

	li:hover{
		background-color: #ddd;
	}
	
	li:hover button{
		display: block;
	}
</style>