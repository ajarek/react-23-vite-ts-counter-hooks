import classes from "./styles.module.css"
type Button = {
  className: string
  children: string
  onClick: () => void
}
export const Button = (props: Button) => {
  const { className, children, onClick, ...otherProps } = props

  return (
    <button
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  )
}
export default Button
