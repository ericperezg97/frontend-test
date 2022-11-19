import { Outlet } from 'react-router'
import Header from '../Header'
import SideBar from '../SideBar'
const Layout = () => {
 return (
  <div className='Layout'>
   <Header/>
   <div className='Layout-Bottom'>
    <SideBar/>
    <div style={{"backgroundColor": "#F2F8FE", "width":"100%"}}/>
   </div>
  </div>
 )
}
export default Layout