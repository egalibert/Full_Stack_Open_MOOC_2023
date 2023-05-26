const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
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
      <h1>{course.name}</h1>
    )
  }
  const Content = (props) => {
    return(
      <div>
      <Part kurssi={course.parts[0].name} ex={course.parts[0].exercises}/>
      <Part kurssi={course.parts[1].name} ex={course.parts[1].exercises}/>
      <Part kurssi={course.parts[2].name} ex={course.parts[2].exercises}/>
      </div>
    )
  }
  const Total = (props) => {
    return(
      <p>number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
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
