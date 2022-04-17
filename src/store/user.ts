
export interface UserState {

    token: string;
    username: string;

}
export const useUserStore = defineStore({
  id:'user',
  state:():UserState=> {
    return {
       token: "", username: ""
    };
  },
  getters: {
    token  ():string   {
      return this.token;
    } ,

  },
  actions: {
    setUserToken(  val:string) {
      this. token = val;
    },
    setUserInfo(  val:UserState ) {
      this.$state = val;
    },

  },
});
