import './styles.css'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../services/api'
import { FormEvent, useState } from 'react'
import useAuth from '../../hooks/useAuth'

function SingIn () {
  const navigate = useNavigate()
  const { handleGetToken, handleAddToken } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit (event: FormEvent) {
    event.preventDefault()

    try {
      if(!email || !password) throw new Error('Email and password is required.')

      const response = await api.post('/login', {
        email,
        password
      })

      const { accessToken } = response.data

      handleAddToken(accessToken)
      navigate('./main')
    } catch (error) {
      return 'Internal error occurred.'
    }
  }

  return (
    <div className='container container-sign-in'>
      
    <div className="sign-in">
      <h1>Sua logo aqui!</h1>

      <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder='E-mail'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />

        <input
        type="password"
        placeholder='Senha'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />

        <span>
          Não possui cadastro?&nbsp;
          <Link to="/sing-up">Clique aqui</Link>
          </span>

          <button className='btn-purple'>Login</button>
      </form>
    </div>
    </div>
  )
}

export default SingIn
