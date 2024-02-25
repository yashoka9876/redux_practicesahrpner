const redux=require('redux');

const counterReducer=(state={account:0},action)=>{
    switch(action.type){
        case 'increament':
            if(action.payload){
                return {account:state.account+action.payload}
            }
            return {account:state.account+1}
        case 'decrement':
            if(action.payload){
                return {account:state.account-action.payload}
            }
            return {account:state.account-1}
        default:
            return {account:state.account}
    }
   
}



const store=redux.createStore(counterReducer);

console.log(store.getState())

const counterSubscriber=()=>{
    const latestState=store.getState();
    console.log(latestState);
}




store.subscribe(counterSubscriber);

store.dispatch({type:'increament',payload:100})
store.dispatch({type:'increament',payload:100})


store.dispatch({type:'decrement',payload:50})
// for( let i=1;i<=5;i++){
//     store.dispatch({type:'increament'})
// }

// store.dispatch({type:'decrement'})
