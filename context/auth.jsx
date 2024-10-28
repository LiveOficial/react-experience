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

  const login = async (email, password) => {
    try {
      const { data: { token, user } } = await api.post('authentication/login', {
        email: email,
        password: password
      })

      setToken(token)
      setUser(user)
      saveToken(token)
      saveUser(user)
      return true
    } catch (error) {
      return false
    }
  }

  const saveUser = async (user) => {
    await setItemAsync('user', JSON.stringify(user))
    setUser(user)
  }

  const saveToken = async (token) => {
    await setItemAsync('token', token)
    setToken(token)
  }

  const logout = async () => {
    setToken(null)
    setUser(null)
    deleteItemAsync('token')
    deleteItemAsync('user')
  }

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser, login, logout, saveToken, saveUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)