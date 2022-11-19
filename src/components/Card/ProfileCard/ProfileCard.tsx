import { useState } from 'react'
import Button from "../../Button"
import ProfileItem from "../../ProfileItem"

const ProfileCard = () => {
 const [selectedUser, setSelectedUser] = useState(0)

 const info = [{
  id: 0,
  imageUrl:"./images/users/User1_Img.jpg",
  name: "Eric Perez",
  userName:"@ericperezg97",
  products:32,
  amount:"1,700",
  currency:"USD",
  percentage:32
 }, {
  id:1,
  imageUrl:"./images/users/User2_Img.svg",
  name: "Dario Lopez",
  userName:"@dlopez89",
  products:15,
  amount:"1,950",
  currency:"USD",
  percentage:40
  }, {
  id: 2,
  imageUrl:"./images/users/User3_Img.svg",
  name: "Fer Jimenez",
  userName:"@ferj56",
  products:25,
  amount:"1,560",
  currency:"USD",
  percentage:25
  }
 ]

 const {imageUrl, name, userName, products,amount, currency, percentage} = info[selectedUser]
 
 return (
  <div className='ProfileCard'>
   <div className='ProfileCard-InfluencerContainer'>
    <div className='ProfileCard-Influencer'>Top 3 Influencers</div>
    <div className='ProfileCard-SeeAll'>See All</div>
   </div>
   <div className='ProfileCard-ProfileContainer'>
    <img src={imageUrl} className='ProfileCard-ProfilePicture'/>
    <div className='ProfileCard-ProfileInfo'>
     <div className='ProfileCard-Name'>{name}</div>
     <div className='ProfileCard-UserName'>{userName}</div>
     <div className='ProfileCard-Products'>{products} Promoting Products</div>
     <Button className='ProfileCard-ContactButton' inverted>CONTACT</Button>
    </div>
   </div>
   <div className='ProfileCard-GoalContainer'>
    <div className='ProfileCard-EarningCurrency'><span className='ProfileCard-Earning'>{amount} </span>{currency}</div>
    <div className='ProfileCard-Bar'>
     <div className='ProfileCard-BarIndicator' style={{"width":`${percentage}%`}}/>
    </div>
    <div className='ProfileCard-GoalText'><span className='ProfileCard-GoalTextPercent'>{percentage}%</span> completed of the influencer’s monthly goal</div>
   </div>
   {info.map((user) => {
    if (user.id != selectedUser) {
     return <ProfileItem onClick={() => { setSelectedUser(user.id) }} info={user} className='ProfileCard-ProfileItem' />
    }
   })}
  </div>
 )
}
export default ProfileCard