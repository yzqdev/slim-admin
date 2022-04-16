import { createStore } from "vuex";
interface State{
   user:{
       token:string
   }
   stateVisible:boolean
}
const store = createStore({
    state() {
        return {
            user: {token:'',username:''},
            statVisible: false,
        };
    },
    getters:{
        token:(state:State)=>{
            return state.user.token
        }
    },
    mutations: {
        setUserToken(state,val ){
            state.user.token=val
        },
        setUserInfo(state,val){
            state.user=val
        }
    },
});
export default store;
