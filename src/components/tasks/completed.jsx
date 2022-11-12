import Task from "../task/task.jsx";

const Completed = (props) => {
  return (
    <div className="container mt-5 w-2/3 mx-auto bg-[#f5f7ff] rounded-lg shadow-lg md:w-3/5">
      {/* Heading */}
      <p className="text-center font-['Roboto'] font-[600] text-[1rem] bg-[#1b663e] text-white  shadow-sm">
        Completed Tasks
      </p>
      {/* List */}
      <ul className="items-center w-full text-sm font-medium border border-gray-200 ">
        {props.tasks.map((task) => (
          <Task
            completed={true}
            task={task}
            addTask={props.addTask}
            removeTask={props.removeTask}
            editTask={props.editTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default Completed;
