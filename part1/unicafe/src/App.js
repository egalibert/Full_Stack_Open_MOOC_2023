import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({text, value}) => {
  if (text === "positive") {
    return (
      <tr><td>{text} {value} %</td></tr>
    )
  }

  return (
    <tr><td>{text} {value}</td></tr>
  )
}

const Statistics = ({clicks}) => {
  const total = clicks[0] + clicks[1] + clicks[2]
  const average = total / 3
  const positive = (clicks[0] / total) * 100
  return (
    <div>
      <table>
        <tbody>
          <Statistic text="Good" value={clicks[0]} />
          <Statistic text="Neutral" value={clicks[1]} />
          <Statistic text="Bad" value={clicks[2]} />
          <Statistic text="all" value={total} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive} />
          {/* /* <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive} />  */}
        </tbody>
      </table>
    </div>
  )
}

const App = () => 
{

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Header = props => <h1>{props.name}</h1>

  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

const handleGoodClick = () => setGood(good + 1)

const handleNeutralClick = () => setNeutral(neutral + 1)

const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      {console.log(good, bad, neutral)}
      <Header name="Give Feedback" />
      <Button text="Good" onClick={handleGoodClick}/>
      <Button text="Neutral" onClick={handleNeutralClick}/>
      <Button text="Bad" onClick={handleBadClick} />
      <Header name="Statistics" />
      <Statistics clicks={[good, neutral, bad]} />
    </div>
  )
}

export default App