import { EventListenerModel } from "../types/_types";
import center from "./event";


export default function mock(model: EventListenerModel) {
  center.addEventListener(model);
}
