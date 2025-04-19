import { useState } from "react";

const Statistics = ({ stats }) => {
	return (
		<table>
			<tbody>
				<tr>
					<td>Good</td>
					<td>{stats.good}</td>
				</tr>
				<tr>
					<td>Neutral</td>
					<td>{stats.neutral}</td>
				</tr>
				<tr>
					<td>Bad</td>
					<td>{stats.bad}</td>
				</tr>
				<tr>
					<td>All</td>
					<td>{stats.good + stats.neutral + stats.bad}</td>
				</tr>
				<tr>
					<td>Average</td>
					<td>
						{(stats.good - stats.bad) /
							(stats.good + stats.neutral + stats.bad)}
					</td>
				</tr>
				<tr>
					<td>Positive</td>
					<td>
						{(stats.good /
							(stats.good + stats.neutral + stats.bad)) *
							100}{" "}
						%
					</td>
				</tr>
			</tbody>
		</table>
	);
};
const Buttons = ({ handleClick }) => {
    return (
        <div>
            <button onClick={() => handleClick("good")}>Good</button>
            <button onClick={() => handleClick("neutral")}>Neutral</button>
            <button onClick={() => handleClick("bad")}>Bad</button>
        </div>
    );
}

export const Unicafe = () => {
	const [stats, setStats] = useState({
		good: 0,
		neutral: 0,
		bad: 0,
	});
	const handleStatClick = (stat) => {
		setStats((prevStats) => ({
			...prevStats,
			[stat]: prevStats[stat] + 1,
		}));
	};
	return (
		<div>
			<h1>Give Feedback</h1>
            <Buttons handleClick={handleStatClick} />
			<h1>Statistics</h1>
			{stats.good + stats.neutral + stats.bad === 0 ? (
				<p>No feedback given</p>
			) : (
				<Statistics stats={stats} />
			)}
		</div>
	);
};
