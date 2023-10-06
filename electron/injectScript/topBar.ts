/* eslint-disable @typescript-eslint/no-explicit-any */
export const topBar = (device: TDevice) => {

    const windowTopBar: any = document.createElement('div')
    document.body.style.marginTop = "32px"
    windowTopBar.style.webkitAppRegion = "drag"
    windowTopBar.setAttribute("class", "device__topbar")

    const title = document.createElement('p')
    title.innerHTML = device.name

    const close = document.createElement('div')
    close.innerHTML = `
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"></path>
            <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 320L192 192m0 128l128-128"></path>
        </svg>
    `

    windowTopBar.appendChild(title)
    windowTopBar.appendChild(close)

    document.body.appendChild(windowTopBar)
}