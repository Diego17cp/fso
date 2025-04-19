import { useState } from "react";
import { anecdotes } from "./constants";

export const Anecdotes = () => {
    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
    const [showMostVoted, setShowMostVoted] = useState(false);

    const handleVote = () => {
        const newVotes = [...votes];
        newVotes[selected] += 1;
        setVotes(newVotes);
    };

    const handleNextAnecdote = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length));
    };

    const mostVotedIndex = votes.indexOf(Math.max(...votes));
    const mostVotedAnecdote = anecdotes[mostVotedIndex];

    const handleMostVoted = () => {
        setShowMostVoted(!showMostVoted);
    }

    return (
        <div>
            <h1>Anecdotes</h1>
            <p>{anecdotes[selected].anecdote}</p>
            <p>has {votes[selected]} votes</p>
            <button onClick={handleVote}>Vote</button>
            <button onClick={handleNextAnecdote}>Next Anecdote</button>
            <button onClick={handleMostVoted}>View the most voted</button>
            {showMostVoted && (
                <div>
                    <h2>Most Voted Anecdote</h2>
                    <p>{mostVotedAnecdote.anecdote}</p>
                    <p>has {votes[mostVotedIndex]} votes</p>
                </div>
            )}
        </div>
    );
}