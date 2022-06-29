import mitt from "mitt";
interface EvBus {
  $on: Function;
  $off: Function;
  $emit: Function;
}

const emitter = mitt();
const bus: EvBus = { $on: emitter.on, $off: emitter.off, $emit: emitter.emit };

export default bus;
