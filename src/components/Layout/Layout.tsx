import { Outlet } from 'react-router'
import Header from '../Header'
import SideBar from '../SideBar'

const Layout = () => {
 return (
  <div className='Layout'>
   <Header/>
   <div className='Layout-Bottom'>
    <SideBar />
     <Outlet/>
   </div>
  </div>
 )
}
export default Layout