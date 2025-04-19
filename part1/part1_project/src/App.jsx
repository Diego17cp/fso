import { Anecdotes } from "./Anecdotes";
import { Unicafe } from "./Unicafe";
import { useState } from "react";

const Buttons = ({ handleClick }) => {
	return (
		<div>
			<button onClick={() => handleClick("unicafe")}>Unicafe</button>
			<button onClick={() => handleClick("anecdotes")}>
				Anecdotes
			</button>
			<button onClick={() => handleClick("feedback")}>Feedback</button>
		</div>
	);
};

function App() {
	const [views, setShowView] = useState({
		unicafe: false,
		anecdotes: false,
		feedback: false,
	});
	const handleShowView = (view) => {
		setShowView((prevViews) => ({
			...prevViews,
			[view]: !prevViews[view],
		}));
	};
	return (
		<>
			<h1>Select what project do u want to view</h1>
      <Buttons handleClick={handleShowView} />
			{views.unicafe && <Unicafe />}
			{views.anecdotes && <Anecdotes />}
		</>
	);
}

export default App;
