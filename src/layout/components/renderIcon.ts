export default defineComponent({
  props: {
    iconName: { type: String },
  },
  setup(props, ctx) {
    return () => {
      return h("div", { class: ["text-xl", props.iconName] }, []);
    };
  },
});
