import GraphCard from "../Card/GraphCard"
import InfoCard from "../Card/InfoCard"

const InfoSection = () => {
 const info = {
  cardInfo: [{
   earning: 40.1546,
   currency: "CXE",
   increase: 1.3
  },
  {
   earning: 1300,
   currency: "USD",
   increase: 1.3
  }]
 }
 return (
  <div className='InfoSection'>
   <div className='InfoSection-Left'>
    <GraphCard/>
   </div>
   <div className='InfoSection-Right'>
    {info.cardInfo.map((info, idx) =>
     <InfoCard key={idx} info = { info } className='InfoSection-Card' />
    )}
   </div>
  </div>
 )
}
export default InfoSection