import { defaultTheme } from "@/constants/defaultTheme";
import { type ThemeState } from "@/type/storeTypes";

export const useThemeStore = defineStore({
  id: "themeConfig",
  state: (): ThemeState => ({ ...defaultTheme }),

  actions: {
    setThemeConfig(val: ThemeState) {
      this.$state = val;
    },
  },
});
