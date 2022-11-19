import Icon from "../Icon"

interface Props {
  info: {
    id: number,
    imageUrl: string,
    name: string,
    userName:string,
    products:number,
    amount:string,
    currency:string,
    percentage:number
  }
  className?: String
  onClick: ()=>void
}
const ProfileItem = ({ onClick, info, className:externalClassName=''}: Props) => {
 const { imageUrl, name, userName, products, amount, currency } = info
 return (
   <div onClick={onClick} className={`ProfileItem ${externalClassName}`}>
   <div className='ProfileItem-Left'>
    <img src={imageUrl} className='ProfileItem-Image'/>
    <div className='ProfileItem-Info'>
         <div className='ProfileItem-ProfileName'>{name}</div>
     <div className='ProfileItem-BottomInfoContainer'>
           <div className='ProfileItem-ProfileProducts'>{products} Products</div>
           <div className='ProfileItem-ProfileHandler'>{userName}</div>
     </div>
    </div>
   </div>
   <div className='ProfileItem-Right'>
    <div className='ProfileItem-RightTop'>
         <div className='ProfileItem-GeneratedAmount'><span className='ProfileItem-GeneratedAmountValue'>{amount} </span>{currency}</div>
     <div className='ProfileItem-GeneratedText'>Total Generated</div>
    </div>
    <Icon type='arrow-right' color='#375EF8'/>
   </div>
 </div>
 )
}
export default ProfileItem