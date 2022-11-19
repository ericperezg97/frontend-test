import GraphCard from "../Card/GraphCard"
import InfoCard from "../Card/InfoCard"

interface Props {
 className: string
}

const InfoSection = ({className:externalClassName=""}:Props) => {
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
  <div className={`InfoSection ${externalClassName}`}>
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