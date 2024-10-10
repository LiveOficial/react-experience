import React, { createContext, useContext } from "react";

const AuthContext = createContext({

})

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider')
    }
    return context
}


export default AuthContext