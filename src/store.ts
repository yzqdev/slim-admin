import { createStore } from "vuex";
interface State {
  themeConfig:{
    dark:boolean
    contentPadding:boolean
  },
  user: {
    token: string;
    username: string;
  };
  stateVisible?: boolean;
}
const store = createStore({
  state() {
    return {
      themeConfig:{dark:true,
        contentPadding:true
      },
      user: { token: "", username: "" },
      statVisible: false,
    };
  },
  getters: {
    token: (state: State) => {
      return state.user.token;
    },
    themeConfig:(state:State)=>{
      return state.themeConfig
    }
  },
  mutations: {
    setUserToken(state, val) {
      state.user.token = val;
    },
    setUserInfo(state, val) {
      state.user = val;
    },
    setThemeConfig(state:State,val){
      state.themeConfig=val
    }
  },
});
export default store;
