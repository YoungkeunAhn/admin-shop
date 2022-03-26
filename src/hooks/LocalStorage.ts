class LocalStorage {
  constructor() {}

  static setItem(key: string, item: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, item)
    }
  }

  static getItem(key: string) {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key)
    } else {
      return null
    }
  }

  static clear() {
    if (typeof window !== 'undefined') {
      localStorage.clear()
    }
  }

  static removeItem(key: string) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key)
    }
  }
}

export default LocalStorage