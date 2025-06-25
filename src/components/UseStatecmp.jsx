// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowMore } from "../counter/showMoreSlice";

const UseStatecmp = () => {
  // const [showmore, setShowmore] = useState(false);
  const showmore = useSelector((state) => state.showmore.value);
  const dispatch = useDispatch();
  const text =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum   reiciendis at quasi, tenetur corrupti similique commodi aspernatur? Odit unde velit fuga nemo quod fugiat, expedita soluta, deserunt iste laborum ";
  return (
    <>
      <h5 className="text-lg text-gray-400">
        {showmore ? text : text.substring(0, 10)}
      </h5>
      {/* <button onClick={() => setShowmore((prev) => !prev)}> */}
      <button onClick={() => dispatch(toggleShowMore())}>
        {showmore ? "less" : "more"}
      </button>
    </>
  );
};

export default UseStatecmp;
