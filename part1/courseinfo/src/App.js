const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const Part = (props) => {
    return (
      <p>
        {props.kurssi} {props.ex}
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
      <Part kurssi={part1.name} ex={part1.exercises}/>
      <Part kurssi={part2.name} ex={part2.exercises}/>
      <Part kurssi={part3.name} ex={part3.exercises}/>
      </div>
    )
  }
  const Total = (props) => {
    return(
      <p>number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
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
