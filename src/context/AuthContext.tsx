
import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface AuthContextType {
  user: {
    id:number,
    firstName:string,
    lastName: string,
    password: string,
    email:string
  }|null
  
  login: (data: {
    username: string,
    password: string,
    email: string,
    expiresInMins: number
  }) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      navigate('/home')
    }
  }, [navigate])

  const login = async (data:{
    username: string,
    password: string,
    email: string,
    expiresInMins: number
  }) => {
   
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      if (!response.ok) {
        throw new Error('Login failed')
      }

      const userData = await response.json()
      localStorage.setItem('user', JSON.stringify(userData))
      setUser(userData)
      navigate('/home')
   
  }

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
    navigate('/auth/login')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

