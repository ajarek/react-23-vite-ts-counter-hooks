import { useState } from "react"
import classes from "./styles.module.css"
import { Button } from "../../components/Button/Button"
type Counter = {
  className: string
  initialValue: number
}
export const Counter = (props: Counter) => {
  const { className, initialValue, ...otherProps } = props
  const [count, setCount] = useState(initialValue)
  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <h1>{count}</h1>
      <div className={classes.card}>
        <Button
          className={classes.incremental}
          onClick={() => setCount((count) => count + 1)}
        >
          ➕
        </Button>
        <Button
          className={classes.reset}
          onClick={() => setCount((count) => count = initialValue)}
        >
          RESET
        </Button>
        <Button
          className={classes.decremental}
          onClick={() => setCount((count) => count - 1)}
        >
          ➖
        </Button>
      </div>
    </div>
  )
}
export default Counter
