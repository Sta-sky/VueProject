import {reactive, onMounted,onBeforeUnmount} from 'vue'

export default function (){

    // 实现鼠标打点的数据
    let position = reactive({
        x: 0,
        y: 0
      })
    // 实现鼠标打点的方法
    function savePoints(event){
        position.x = event.pageX
        position.y = event.pageY
    }

    // 实现鼠标打点的生命周期钩子
    onMounted(()=>{
      window.addEventListener('click', savePoints)
    })

    onBeforeUnmount(()=>{
      window.removeEventListener('click', savePoints)
               
    })
    return position

}