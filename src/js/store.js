
import { createStore } from 'framework7/lite';

// cus IOS can't handle the simple task of supporting webp and webm
import { getDevice } from "framework7";
const device = getDevice();
const isIOS =
  device.ios || device.iphone || device.ipad || device.ipod || device.macos;

const isMobile = device.ios || device.android;

const store = createStore({
  state: { isIOS, isMobile },
  getters: {
    isIOS({ state }) {
      return state.isIOS;
    },
    isMobile({ state }) {
      return state.isMobile;
    }
  },
});
export default store;
