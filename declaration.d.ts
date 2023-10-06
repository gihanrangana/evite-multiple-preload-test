type TDevice = {
    name: string,
    id: string,
    ua: string,
    width: number,
    height: number
}

type TMobileWindowEventParams = {
    device: TDevice,
    url: string
}

type TDevices = {
    android: TDevice[],
    iphone: TDevice[],
    tabs: TDevice[],
}

type TApp = {
    devices: TDeviceState,
    availableDevices: TDevices,
    loading?: boolean,
    actions: {
        setDevices: React.Dispatch<React.SetStateAction<TDeviceState>>
        // setAvailableDevices: React.Dispatch<React.SetStateAction<TDevices>>
    }
}