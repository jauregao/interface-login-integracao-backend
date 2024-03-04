import './styles.css'
import Header from '../../components/Header'
import Avatar from '../../components/Avatar'
import useTeacherDetail from '../../hooks/useTeacherDetail'

function TeacherDetail() {
  const { currentTeacherDetail } = useTeacherDetail();

  return(
    <div className='container'>
      <Header showArrowBack/>
      
      <div className='teacher-detail'>
        <Avatar image={currentTeacherDetail?.avatar || ''}/>
        <h1>{currentTeacherDetail?.name}</h1>
        <span>{currentTeacherDetail?.stack}</span>

        <div className='line'></div>

        <p>{currentTeacherDetail?.bio}</p>

      </div>
    </div>
  )
}

export default TeacherDetail
