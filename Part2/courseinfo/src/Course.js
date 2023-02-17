
const Course = ({course}) => {
    console.log('Here 0')
    return(
    <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
    </div>
    )
}

const Header = ({course}) => {
    return(
    <div> <h1>{course}</h1> </div>
    )
}
const Part = ({name, exercises}) => {
    console.log('Here 2: ', {name, exercises})
    return(
    <p> {name} {exercises} </p>
    )
}
const Content = ( { parts } ) => {
    console.log('Here 1: ', parts)
    const sumExercises = parts.reduce((partialSum, x) => partialSum+x.exercises,0) // 2.3*
    return(
    <div>
        {parts.map(part => 
            <Part key={part.id} name={part.name} exercises={part.exercises} />
        )}
        <Total sumExercises={sumExercises}/>
    </div>
    )
}
const Total = ({ sumExercises}) => {
    return(
    <div>
    <b>total of { sumExercises }</b>
    </div>
    )
}

export default Course