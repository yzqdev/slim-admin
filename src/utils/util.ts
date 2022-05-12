import dayjs from "dayjs";

export function formatStr(str: string) {
  return str.trim();
}
export function formatDate(date: string) {
  return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
}
