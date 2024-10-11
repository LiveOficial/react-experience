import { useContext, createContext, useState } from "react"
import request from '@/hooks/api'

const AuthContext = createContext()

export default function({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  const login = (email, password) => {
    return request()
      .post('authentication/login', {
        email: email,
        password: password
      })
  }

  const logout = () => {
    setUser(null)
    setToken("")
    localStorage.removeItem("site")
    navigate("/login")
  }

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)