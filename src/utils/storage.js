const storage = {
    // 设置sessionStorage
    ssSet (key, val) {
        if (val) {
            sessionStorage.setItem(key, JSON.stringify(val))
        }
    },
    // 获取sessionStorage
    ssGet (key) {
        return sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key)) : ''
    },
    // 删除sessionStorage
    ssRm (key) {
        sessionStorage.removeItem(key)
    },
    // 设置localStorage
    lsSet (key, val) {
        if (val) {
            localStorage.setItem(key, JSON.stringify(val))
        }
    },
    // 获取localStorage
    lsGet (key) {
        return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : ''
    },
    // 删除localStorage
    lsRm (key) {
        localStorage.removeItem(key)
    }
}
export default storage
