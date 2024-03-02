import './styles.css'
import {Link} from 'react-router-dom'


function SingIn () {

  return (
    <div className='container container-sign-in'>
      
    <div className="sign-in">

      <h1>Sua logo aqui!</h1>

      <form action="GET">

        <input type="text" placeholder='E-mail'/>
        <input type="password" placeholder='Senha'/>

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
