
const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({name, exercises}) => {
  console.log(name)
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({parts}) => {
  console.log(parts);

  return (
    <div>
      <Part name={parts.part1} exercises={parts.exercises1} />
      <Part name={parts.part2} exercises={parts.exercises2} />
      <Part name={parts.part3} exercises={parts.exercises3} />
    </div>
  );
};


const Total = ({ totalExercises }) => {
  return <p>Number of exercises {totalExercises}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const parts = 
    {
    part1: part1, exercises1: exercises1,
    part2: part2, exercises2: exercises2 ,
    part3: part3, exercises3: exercises3 ,
    }
  
  const totalExercises = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total totalExercises={totalExercises} />
    </div>
  );
};

export default App;
