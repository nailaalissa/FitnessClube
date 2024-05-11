import{ HtextProps } from "./Htext.types"
import './Htext.css'

export default function Htext({className, children,...rest}: HtextProps) {
  return (
    <h1  {...rest} className={`h1-style ${className}`}>{children}</h1>
  )
}