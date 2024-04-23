import dayjs from "dayjs";
import VueStorage from "@yzqdev/vue-ls";

export const vueLs = VueStorage.instance();
export function formatStr(str: string) {
  return str.trim();
}
export function formatDate(date: string) {
  return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
}
