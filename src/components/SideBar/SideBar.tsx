import Icon from '../Icon'

const SideBar = () => {
  const selected = true
 return (
  <div className='SideBar'>
   <div className='SideBar-Top'>
       <div className='SideBar-Item' style={{ "backgroundColor": `${selected ? "#EEF0F8" : "none"}`}}>
     <Icon type="home" color={selected ? "#375EF8" :"#7D8092"} className='SideBar-ItemLogo'/>
    </div>
    <div className='SideBar-Item'>
     <Icon type="shop" color="#7D8092" className='SideBar-ItemLogo'/>
    </div>
    <div className='SideBar-Item'>
     <Icon type="categories" color="#7D8092" className='SideBar-ItemLogo'/>
    </div>
    <div className='SideBar-Item'>
     <Icon type="customers" color="#7D8092" className='SideBar-ItemLogo'/>
    </div>
    <div className='SideBar-Item'>
     <Icon type="coupons" color="#7D8092" className='SideBar-ItemLogo'/>
    </div>
    <div className='SideBar-Item'>
     <Icon type="wallet" color="#7D8092" className='SideBar-ItemLogo'/>
    </div>
    <div className='SideBar-Item'>
     <Icon type="network" color="#7D8092"  className='SideBar-ItemLogo'/>
    </div>
   </div>
   <div>
   <div className='SideBar-Item'>
     <Icon type="settings" color="#7D8092" className='SideBar-ItemLogo'/>
    </div>
   </div>
  </div>
 )
}
export default SideBar