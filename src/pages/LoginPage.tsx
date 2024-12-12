import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, User, Lock } from 'lucide-react';
import '../styles/login.css';
import { useAuth } from '../context/AuthContext';

interface FormData {
  username: string;
  email: string;
  password: string;
  rememberMe: boolean;
}

interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
}

export default function LoginPage() {
    const { login } = useAuth()
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    rememberMe: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {

    
    const newErrors: FormErrors = {};
    let isValid = true;

    if (formData.username !== 'emilys') {
      newErrors.username = 'Username must be "emilys"';
      isValid = false;
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      try {
        await login({
          username: formData.username,
          password: formData.password,
          email: formData.email,
          expiresInMins: 30
        })
      } catch (error) {
        alert('Login failed. Please use the credentials: username: kminchelle, password: 0lelplR')
      }
    }
  }

  return (
    <div className="login-container">
      <div className="login-left">
        <img src="/1.png" alt="Login illustration" className="login-illustration" />
      </div>
      <div className="login-right">
        <div className="login-form-container">
          <h1>Welcome to</h1>
          <h2 className="unstop-title">Unstop</h2>

          <div className="social-buttons">
            <button className="social-button google">
              <img src="/google.png" alt="Google" />
              Login with Google
            </button>
            <button className="social-button facebook">
              <img src="/facebook.png" alt="Facebook" />
              Login with Facebook
            </button>
          </div>

          <div className="divider">OR</div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <div className="input-wrapper">
                <User className="input-icon" />
                <input
                  type="text"
                  placeholder="Username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
              </div>
              {errors.username && <span className="error-message">{errors.username}</span>}
            </div>

            <div className="form-group">
              <div className="input-wrapper">
                <Mail className="input-icon" />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <div className="input-wrapper">
                <Lock className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <div className="form-footer">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                />
                Remember me
              </label>
              <div  className="forgot-password">
                Forgot Password?
              </div>
            </div>

            <button type="submit" className="login-button">
              Login
            </button>

            <p className="register-link">
              Don't have an account? <div className='R-link'>Register</div>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
