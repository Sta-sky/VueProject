<template lang="">
    <div>
        <Student></Student>
        <School></School>
    </div>
</template>


<script>
    //引入组件
    import School from './School'
    import Student from './Student'

    export default {
        name: 'APP',
        components: {
            School,
            Student
        }
        
    }
</script>

<style lang="">
    
</style>