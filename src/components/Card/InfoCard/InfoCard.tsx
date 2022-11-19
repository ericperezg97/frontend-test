import Icon from '../../Icon'

interface Props {
 info: {
  earning: number
  currency: string
  increase: number
 }
 className: string
}

const InfoCard = ({ info, className:externalClassName="" }: Props) => {
 const {earning, currency, increase} = info
 return (
  <div className={`InfoCard ${externalClassName}`}>
  <Icon type='card' color='#525DBF' className='InfoCard-Icon'/>
  <div className='InfoCard-EarningsContainer'>
   <div>
    <span className='InfoCard-Earnings'>{`${earning}`}</span>
    <span className='InfoCard-Currency'>{currency}</span>
   </div>
   <Icon type='arrow' color="#28B550"/>
   </div>
   <div className='InfoCard-Text'>{increase > 0 ? "Increased" : "Decreased"} <span className='InfoCard-Increase'>{Math.abs(increase)}%</span> from last month</div>
 </div>
   )
}
export default InfoCard