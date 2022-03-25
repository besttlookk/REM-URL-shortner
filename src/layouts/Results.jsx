import React, { useContext } from "react";
import ResultCard from "../components/ResultCard";
import { AppContext } from "../contexts/appContext";

const Results = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="flex flex-col gap-1">
      {state.map((result) => (
        <ResultCard key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
