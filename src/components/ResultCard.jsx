import React, { useContext } from "react";
import { actionTypes, AppContext } from "../contexts/appContext";
import CrossIcon from "../images/circle-xmark-solid.svg";

const ResultCard = ({ result }) => {
  const { setCopyState, copyState, dispatch } = useContext(AppContext);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(result.full_short_link2);
      setCopyState({ active: true, id: result.id });
    } catch (error) {
      alert("Something went wrong. Try again!");
    }
  };

  const activeCondition = copyState.active && copyState.id === result.id;
  return (
    <div className="relative mt-6 bg-white rounded-md md:flex md:items-center">
      <div
        className="absolute top-0 right-0 w-6 h-6 transition duration-500 translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-125 active:scale-90"
        onClick={() =>
          dispatch({ type: actionTypes.DELETE_ITEM, payload: result.id })
        }
      >
        <CrossIcon className=" fill-danger" />
      </div>

      <div className="p-4 border-b border-gray-100 text-head md:flex-1 md:text-lg">
        <p>{result.original_link}</p>
      </div>
      <div className="p-4 md:flex md:items-center md:gap-5">
        <p className="mb-4 text-primary md:text-lg md:mb-0">
          {result.full_short_link2}
        </p>
        <button
          className={`font-bold text-white outline-none w-full inline-block transition duration-500 rounded-md px-5 py-2 cursor-pointer bg-primary hover:brightness-110 md:w-28 ${
            activeCondition ? "bg-voiletDark" : "bg-primary"
          }`}
          onClick={handleClick}
        >
          <span>{activeCondition ? "Copied!" : "Copy"}</span>
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
