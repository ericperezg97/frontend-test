interface Props {
 inverted?: any
 children?: string
 className?: string
}
const Button = ({ children, inverted, className:externalClassName=""}:Props) => {
 return (
  <div className={`Button ${inverted ? "Button_inverted" :""} ${externalClassName}`}>
   {children}
  </div>
 )
}
export default Button