import Icon from "../../Icon"
import { useState } from 'react'
import {
 Chart as ChartJS,
 CategoryScale,
 LinearScale,
 PointElement,
 LineElement,
 Title,
 Tooltip,
 Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
 CategoryScale,
 LinearScale,
 PointElement,
 LineElement,
 Title,
 Tooltip,
 Legend
);

const GraphCard = () => {
  const [timeSelected, setTimeSelected] = useState(0);
  const earning = 15.7
  const currency = "USD"
  let xData
  let yData
  switch (timeSelected) {
    case 0:
      xData = ["00:00", "2:00", "4:00", "6:00", "8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"]
      yData = [32, 65, 45, 23, 76, 34, 80, 81, 65, 59, 80, 81]
      break;
    case 1:
      xData = ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"]
      yData = [59, 80, 81, 32, 65, 45, 23, 76, 34, 80, 81, 65]
      break;
    case 2:
      xData = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      yData = [23, 76, 34, 80, 81, 65, 59, 80, 81, 32, 65, 45, ]
      break;
    case 3:
      xData = ["2000", "2002", "2004", "2006", "2008", "2010", "2012", "2014", "2016", "2018", "2020", "2022"]
      yData = [59, 80, 81, 32, 65, 45, 23, 76, 34, 80, 81, 65]
      break;
  }
  const data = {
  labels: xData,
  datasets: [{
    data: yData,
    borderColor: '#0A8BD1',
   tension: 0.5,
  }]
 }
 const options = {
  resposive: true,
  maintainAspectRatio: false,
  scales: {
   y: {
    position: 'right',
   },
   x: {
    grid: {
     display:false
    }
   }
  },
  plugins: {
   legend: {
    display: false
   }
  }
   }
 return (
  <div className='GraphCard'>
   <div className='GraphCard-Top'>
    <div className='GraphCard-TopLeft'>
     <div className='GraphCard-Text'>Total Earning 2022</div>
     <div className='GraphCard-EarningsContainer'>
      <div>
      <span className='GraphCard-Earnings'>{`$${earning}`}</span>
      <span className='GraphCard-Currency'>{currency}</span>
      </div>
      <Icon type='arrow' color="#28B550"/>
     </div>
    </div>
    <div className='GraphCard-TopRight'>
     <div onClick={() => {setTimeSelected(0)}} className={`GraphCard-TimeOption ${timeSelected === 0 ? "GraphCard-TimeOption_selected" : ""}`}>Today</div>
     <div onClick={() => {setTimeSelected(1)}} className={`GraphCard-TimeOption ${timeSelected === 1 ? "GraphCard-TimeOption_selected" : ""}`}>Year</div>
     <div onClick={() => {setTimeSelected(2)}} className={`GraphCard-TimeOption ${timeSelected === 2 ? "GraphCard-TimeOption_selected" : ""}`}>Month</div>
     <div onClick={() => {setTimeSelected(3)}} className={`GraphCard-TimeOption ${timeSelected === 3 ? "GraphCard-TimeOption_selected" : ""}`}>Lifetime</div>
    </div>
   </div>
   <div className='GraphCard-Bottom'>
    {/*@ts-ignore*/}
    <Line data={data} options={options}/>
   </div>
  </div>
 )
}
export default GraphCard