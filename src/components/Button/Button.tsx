interface Props {
 children?: string
 className?: string
}
const Button = ({ children, className:externalClassName=""}:Props) => {
 return (
  <div className={`Button ${externalClassName}`}>
   {children}
  </div>
 )
}
export default Button