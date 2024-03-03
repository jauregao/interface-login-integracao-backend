import './styles.css'
import arrow from '../../assets/arrow-back.svg'
import logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

type Props = {
  showArrowBack?: boolean
}

function Header (showArrowBack: Props){
  const navigate = useNavigate()

  return(
    <header>
      { showArrowBack &&
        <img src={arrow} alt="arrow back" className='arrow-back'
        onClick={()=> navigate(-1)}
        />}
      <img src={logo} alt="logo" />
    </header>
  )
}

export default Header
