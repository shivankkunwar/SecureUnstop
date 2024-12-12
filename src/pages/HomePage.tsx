import { useAuth } from '../context/AuthContext'
import '../styles/home.css'

export default function HomePage() {
  const { user, logout } = useAuth()

  return (
    <div className="home-container">
      <div className="profile-card">
        <img 
          src={'/user.png'} 
          alt="Profile" 
          className="profile-image" 
        />
        <h2>{(user?.firstName+" "+user?.lastName) || 'User'}</h2>
        <p>{user?.email}</p>
        <button onClick={logout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  )
}

