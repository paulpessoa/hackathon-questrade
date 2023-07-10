"use client";
import Score from "react-score-indicator";
import React, { useState } from "react";

const ScoreIndicator = () => {
  const [scoreValue, setScoreValue] = useState(739);

  const getScoreLabel = () => {
    if (scoreValue <= 250) {
      return "Poor Score";
    } else if (scoreValue <= 500) {
      return "Average Score";
    } else if (scoreValue <= 750) {
      return "Good Score";
    } else {
      return "Excellent Score";
    }
  };

  return (
    <>
      <Score
        value={scoreValue}
        maxValue={1000}
        lineWidth={15}
        lineGap={2}
        stepColors={["#d12000", "#ed8d00", "#f1bc00"]}
      />

      <p>{getScoreLabel()}</p>
    </>
  );
};

export default ScoreIndicator;
