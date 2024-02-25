const redux=require('redux');

const counterReducer=(state={account:0},action)=>{
    switch(action.type){
        case 'increament':
            return {account:state.account+1}
        case 'decrement':
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

// for( let i=1;i<=5;i++){
//     store.dispatch({type:'increament'})
// }

// store.dispatch({type:'decrement'})
