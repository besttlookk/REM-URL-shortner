import React, { useState, useContext } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import Button from "./Button";
import { actionTypes, AppContext } from "../contexts/appContext";

const Form = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const { dispatch } = useContext(AppContext);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!input) setError("Please add a link");

    const expression =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    if (input.match(regex)) {
      try {
        const { data } = await axios(
          `https://api.shrtco.de/v2/shorten?url=${input}`
        );

        dispatch({
          type: actionTypes.ADD_ITEM,
          payload: { ...data.result, id: uuidv4() },
        });
        setInput("");
      } catch (error) {
        setError("Something went wrong. Try again!");
      }
    } else {
      setError("Please enter a valid Link");
    }
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-4 p-5 rounded-lg bg-primaryDark md:flex-row md:p-12"
    >
      <div className="relative md:flex-1 ">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Shorten a link here"
          className={`outline-none p-3 inline-block w-full rounded-md md:p-4  ${
            error
              ? "border-2 border-danger placeholder-danger"
              : "border-2 border-transparent"
          }`}
          onFocus={() => setError("")}
        />
        <p className="absolute left-0 mt-1 text-sm -bottom-6 text-danger">
          {error}
        </p>
      </div>
      <div className="mt-6 md:mt-0">
        <Button type="submit" full>
          <span className="text-lg ">Shorten It!</span>
        </Button>
      </div>
    </form>
  );
};

export default Form;
