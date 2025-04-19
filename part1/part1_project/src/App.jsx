const course = {
	name: "Half Stack application development",
	parts: [
		{
			name: "Fundamentals of React",
			exercises: 10,
		},
		{
			name: "Using props to pass data",
			exercises: 7,
		},
		{
			name: "State of a component",
			exercises: 14,
		},
	],
};

const Header = ({ course }) => {
	return (
		<header>
			<h1>{course.name}</h1>
		</header>
	);
};
const Part = ({ part }) => {
	return (
		<div>
			<p>{part.name}</p>
			<p>N° of Exercises: {part.exercises}</p>
		</div>
	);
};
const Content = ({ parts }) => {
	return (
		<div>
			{parts.map((part, i) => (
				<Part key={i} part={part} />
			))}
		</div>
	);
};
export const Total = ({ parts }) => {
	return (
		<div>
			<hr />
			<p>
				Total of exercises:{" "}
				{parts.reduce((sum, part) => sum + part.exercises, 0)}
			</p>
		</div>
	);
};
function App() {
	return (
		<>
			<Header course={course} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</>
	);
}

export default App;
