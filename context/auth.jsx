import { useContext, createContext, useState } from "react"
import { Alert } from "react-native"

const AuthContext = createContext()

export default function({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  const login = async (email, password) => {
    try {
      const response = await fetch("https://api.appliveexperience.com.br/app/authentication/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
      const res = await response.json()
      if (res.data) {
        setUser(res.data.user)
        setToken(res.token)
        Alert.alert("Success", res.message)
        return
      }
      throw new Error(res.message)
    } catch (err) {
      Alert.alert("Success", err)

    }
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