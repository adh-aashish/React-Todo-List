import { AiOutlinePlusCircle } from "react-icons/ai";
// import Form from "../form/form.jsx";

const Add = () => {
  return (
    <AiOutlinePlusCircle
      id="plus"
      className="text-[25px] mx-auto hover:text-green-500"
      onClick={() => {
        const add = document.getElementById("form");
        add.classList.toggle("hidden");
      }}
    />
  );
};

export default Add;
