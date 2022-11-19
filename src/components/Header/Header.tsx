import Button from '../Button'
import Icon from '../Icon'

const Header = () => {
 return (
  <div className='Header'>
   <img src='./images/header/Logo.svg' className='Header-Logo'/>
   <div className='Header-Right'>
    <Button className='Header-Button'>New Product</Button>
    <div className='Header-Icons'>
     <div className='Header-Wallet'>
      <Icon type="wallet" color="#34363D" className='Header-WalletIcon'/>
      <div className='Header-WalletText'>My Wallet</div>
     </div>
      <Icon type="bell" color="#34363D" className='Header-NotificationsIcon'/>
    </div>
    <img src='./images/header/User_Img.jpg' className='Header-UserImage'/>
   </div>
  </div>
 )
}
export default Header