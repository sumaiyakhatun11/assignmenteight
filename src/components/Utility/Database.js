

const getStoredApp = () => {
    const storedAppSTR = localStorage.getItem('appList');
    if (storedAppSTR) {
        const storedAppData = JSON.parse(storedAppSTR)
        return storedAppData
    }
    else {
        return []
    }
}



const addToStoredDB = (id) => {
    const storedAppData = getStoredApp();

    if (storedAppData.includes(id)) {
        alert('Already exists')

    }
    else {
        storedAppData.push(id)
        const data = JSON.stringify(storedAppData)
        localStorage.setItem('appList', data)

    }

}





const removeFromStoredDB = (id) => {
    let storedAppData = getStoredApp()
    storedAppData = storedAppData.filter((appid) => appid.toString() !== id.toString());
    localStorage.setItem('appList', JSON.stringify(storedAppData))

}

export { addToStoredDB, getStoredApp, removeFromStoredDB };