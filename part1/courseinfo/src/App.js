const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Part = (props) => {
    return (
      <p>
        {props.kurssi} {props.exercises}
      </p>
    )
  }

  const Header = (props) => {
    return(
      <h1>{course}</h1>
    )
  }
  const Content = (props) => {
    return(
      <div>
      <Part kurssi={part1} exercises={exercises1}/>
      <Part kurssi={part2} exercises={exercises2}/>
      <Part kurssi={part3} exercises={exercises3}/>
      </div>
    )
  }
  const Total = (props) => {
    return(
      <p>number of exercises {exercises1 + exercises2 + exercises3}</p>
    )
  }
  return (
    <div>
      <Header course={course} />
      <Content parts={Part} />
      <Total parts={Part} />
    </div>
  )
}

export default App
