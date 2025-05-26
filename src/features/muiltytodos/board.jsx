import React from "react";
import { useGettodolistQuery } from "./boardapi";
import Cardtodolist from "./cardboardtitles";

function Boardtodos() {
  const { isLoading, data } = useGettodolistQuery();
  console.log("boarddata", data);
  console.log(isLoading, data);

  return (
    <div className="vh-100">
    <div className="d-flex flex-wrap justify-content-start gap-5 m-5 ">
      {!isLoading &&
        data?.map((s) => {
          return <Cardtodolist todos={s}></Cardtodolist>;
        })}
    </div>
    </div>
  );
}
export default Boardtodos;
