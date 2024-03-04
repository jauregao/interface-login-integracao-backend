import './styles.css'
import Header from '../../components/Header'
import Card from '../../components/Cards'
import api from '../../services/api'
import { useEffect, useState } from 'react'
import Teacher from '../../types/Teacher'

function Main() {

  const [allTeachers, setAllTeachers] = useState<Teacher[]>([])

  async function LoadTeachers() {
    try {
      const response = await api.get('/teachers')

      setAllTeachers([...response.data])
    } catch (error) {
      return 'Internal server error.'
    }
  }

  useEffect(()=> {
    LoadTeachers()
  }, [])

  return (
    <div className='container'>
      <Header />
      
      <div className='main-teachers'>
        {allTeachers.map((teacher)=> (
          <Card
          key={teacher.id}
          teacher={teacher}/>
        ))}
      </div>
    </div>
  );
}

export default Main;
