import React from "react";

export default function Rules(props) {
  return (
    <div className='rules'>
      <h2>Rules</h2>
      <h3>The Algorithm:</h3>
      <ul>
        <li>Filled cells are "alive" - blank cells are "dead"</li>
        <li>
          If a live cell has fewer than 2 neighbors, it dies due to isolation.
        </li>
        <li>
          If a live cell has more than 3 neighbors, it dies due to
          overpopulation.
        </li>
        <li>
          If a dead cell has exactly 3 neighbors, it comes to life due to
          reproduction.
        </li>
      </ul>
      <h3>The Game:</h3>
      <ul>
        <li>
          Create the initial board state by clicking on cells to toggle them
          between live or dead.
        </li>
        <li>You can also load a preset as a starting point</li>
        <li>Start the animation by pressing "Play", or move it forward once with "Step".</li>
        <li>You can stop the animation at any time by pressing "Stop".</li>
      </ul>
    </div>
  );
}