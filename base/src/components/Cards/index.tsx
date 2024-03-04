import Avatar from '../Avatar'
import './styles.css'

type Props = {
  teacher: {
    id: number
    avatar: string
    name: string
  }
}

function Card({teacher}: Props) {
  return (  
    <div className='card'>
      <Avatar image={teacher.avatar}/>
      <h1>{teacher.name}</h1>
    </div>
  )
}

export default Card
