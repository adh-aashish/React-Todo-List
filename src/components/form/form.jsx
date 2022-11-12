import { TiTick } from "react-icons/ti";

const Form = (props) => {
  return (
    <div className="flex items-center">
      <li className="w-full border-b border-gray-300 sm:border-b-0 sm:border-r">
        <div className="flex items-center p-3">
          <input
            id="input-form"
            type="text"
            className="flex-1 h-10 px-4 rounded-full outline-blue-300 border-black"
            placeholder="Add New Task"
            autoFocus={true}
            value={props.editedTask}
            onChange={(e) => {
              props.editTask(e.target.value);
            }}
          />
          <TiTick
            className="text-green-900 text-[25px] hover:text-green-700 ml-3"
            onClick={() => {
              const elem = document.getElementById("input-form");
              elem.value = "";
              if (props.editedTask.length !== 0) {
                props.addTask(props.editedTask);
              }
              props.editTask("");
            }}
          />
        </div>
      </li>
    </div>
  );
};

export default Form;
