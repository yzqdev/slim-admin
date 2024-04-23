import { type UserState } from "@/type/storeTypes";

export const useUserStore = defineStore({
  id: "user",
  state: (): UserState => {
    return {
      token: "",
      username: "珊瑚宫心海",
      nickname: "",
      uid: "",
      email: "",
      telephone: "",
    };
  },
  getters: {},
  actions: {
    setUserInfo(val: UserState) {
      this.$state = val;
    },
    async logout() {},
  },
});
