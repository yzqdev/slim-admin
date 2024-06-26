import * as echarts from "echarts";
export default function useEcharts(dom: HTMLElement, theme?: string) {
  const instance = echarts.getInstanceByDom(dom);
  if (!instance) {
    instance = echarts.init(dom, theme);
  }
  return instance;
}
