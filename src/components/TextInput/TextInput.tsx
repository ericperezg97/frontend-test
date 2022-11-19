import Icon from '../Icon'

interface Props {
 className?: string
}
const TextInput = ({className:externalClassName=""}:Props) => {
 return (
  <div className={`TextInput ${externalClassName}`}>
   <input type='text' className='TextInput-Input' />
   <Icon type='link' color='#5675f4' className='TextInput-Icon'/>
 </div>
 )
}
export default TextInput