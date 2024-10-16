import api from "@/hooks/api"
import { useContext, createContext, useState, useEffect } from "react"
import { getItemAsync, setItemAsync } from 'expo-secure-store'

const AuthContext = createContext()

export default function({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = async () => {
    const token = await getItemAsync('token')

    if (token) {
      const user = JSON.parse(await getItemAsync('user'))
      setToken(token)
      setUser(user)
    }
  }

  const saveUserData = (user, token) => {
    setItemAsync('token', token)
    setItemAsync('user', JSON.stringify(user))
    setToken(token)
    setUser(user)
  }

  const login = async (email, password) => {
    try {
      const { data: { token, user } } = await api.post('authentication/login', {
        email: email,
        password: password
      })

      saveUserData(user, token)
      return true
    } catch (error) {
      return false
    }
  }

  const logout = () => {
    saveUserData(null, null)
  }

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)