import { Counter } from "./components/Counter/Counter"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Counter
        className=""
        initialValue={0}
      />
      <Counter
        className=""
        initialValue={1}
      />
      <Counter
        className=""
        initialValue={2}
      />
      <Counter
        className={""}
        initialValue={3}
      />
      <Counter
        className=""
        initialValue={4}
      />
    </div>
  )
}

export default App
