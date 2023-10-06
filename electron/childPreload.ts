import { contextBridge } from 'electron';

const func = () => {

}
contextBridge.exposeInMainWorld('customData', func)