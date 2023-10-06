import './App.scss'

function App() {

    const handleClick = () => {
        window.ipcRenderer.send('open-mobile-view', {
            width: 360,
            height: 740,
            url: "https://www.google.com"
        })
    }

    return (
        <button onClick={handleClick}>Open Window</button>
    )
}

export default App
