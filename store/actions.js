export default {
  add:({commit})=>commit('add'),
  reduce:({commit})=>commit('reduce'),
  addIfOdd({commit,state}){
    if((state.count+1)%2==0){
      commit('add')
    }
  },
  addAsync({commit}){
    setTimeout(()=>{
      commit('add')
    },1000)
  }
}