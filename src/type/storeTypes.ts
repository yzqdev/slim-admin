export interface ThemeState {
  dark: boolean;
  contentPadding: boolean;
  showFooter: boolean;
}

export interface UserState {
  uid: string;
  token: string;
  username: string;
  nickname?: string;
  email?: string;
  telephone?: string;
}
