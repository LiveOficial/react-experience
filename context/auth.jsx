import api from "@/hooks/api"
import { useContext, createContext, useState, useEffect } from "react"
import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store'

const AuthContext = createContext()

export default function({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  useEffect(() => {
    (async () => {
      const token = await getItemAsync('token')

      if (token) {
        const user = await getItemAsync('user')
        setToken(token)
        setUser(JSON.parse(user))
      }
    })()
  }, [])


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

  const logout = async () => {
    await deleteItemAsync('token')
    await deleteItemAsync('user')
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)