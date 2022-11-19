import Icon from '../../components/Icon'
import TextInput from '../../components/TextInput'
import InfoSection from '../../components/InfoSection'
import ProfileCard from '../../components/Card/ProfileCard'

const HomePage = () => {
 const userInfo = {
  name: "Eric Perez"
 }
 return (
  <div className='HomePage'>
   <div className='HomePage-Top'>
    <div className='HomePage-TopLeft'>
     <span className='HomePage-Welcome'>Welcome, </span>
     <span className='HomePage-UserName'>{userInfo.name}</span>
    </div>
    <div className='HomePage-TopRight'>
     <div className='HomePage-Invite'>
      <div className='HomePage-InviteText'>Invite a friend to Commerxe</div>
      <Icon type="info" color="#375EF8" className='HomePage-InviteIcon'/>
     </div>
     <TextInput/>
    </div>
   </div>
   <div className='HomePage-Bottom'>
    <InfoSection className='HomePage-InfoSection'/>
    <ProfileCard/>
   </div> 
  </div>
 )
}
export default HomePage