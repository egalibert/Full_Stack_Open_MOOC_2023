const Course = ({course}) => {
    
    const Part = ({ name, exercises }) => <li>{name}: {exercises}</li>
      
    const Header = ({ header }) => <h2>{header}</h2>
    
    const Content = ({ course }) => (
		<div>
		  <ul>
			{course.map(({ name, exercises, id }) => (
			  <Part key={id} name={name} exercises={exercises} />
			))}
		  </ul>
		</div>
	  )

	const Total = ({ exercises }) => {
		const total = exercises.reduce((total_exercises, part) => total_exercises + part.exercises, 0)
		return (
		  <p>
			<strong>There are total of {total} exercises</strong>
		  </p>
		)
	  }

    return (
      <div>
        <Header key={course.id} header={course.name} />
        <Content course={course.parts} />
        <Total exercises={course.parts} />
      </div>
    )
  }

  export default Course