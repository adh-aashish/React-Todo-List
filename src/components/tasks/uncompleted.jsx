import Task from "../task/task.jsx";
import Form from "../form/form.jsx";

const UnCompleted = (props) => {
  return (
    <div className="container mt-5 w-2/3 mx-auto bg-[#f5f7ff] rounded-lg shadow-lg md:w-3/5">
      {/* Heading */}
      <div className="flex space-x-2 justify-center bg-slate-500">
        <p className="text-center font-['Roboto'] font-[600] text-[1rem]  text-white  shadow-sm">
          Uncompleted Tasks
        </p>
      </div>
      {/* List */}
      <ul className="items-center w-full text-sm font-medium border border-gray-300">
        {props.tasks.map((task) => (
          <Task
            completed={false}
            task={task}
            addTask={props.addTask}
            removeTask={props.removeTask}
            editTask={props.editTask}
          />
        ))}
        <Form
          addTask={props.addTask}
          editTask={props.editTask}
          editedTask={props.editedTask}
        />
      </ul>
    </div>
  );
};

export default UnCompleted;
