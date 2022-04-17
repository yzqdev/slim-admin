export interface ThemeState {

    dark: boolean
    contentPadding: boolean

}

export const useThemeStore = defineStore(
    {
        id: 'themeConfig',
        state: (): ThemeState => ({

            dark: true,
            contentPadding: true


        }),
        getters: {

            getDark(): boolean {
                return this.dark
            }, getContentPadding(): boolean {
                return this.contentPadding
            }
        },
        actions: {

            setContentPadding(val: boolean) {
                this.contentPadding = val
            }
            , setThemeConfig(val: ThemeState) {
                this.$state = val
            }
        },
    }
)

