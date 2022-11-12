import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import React from "react";

const Task = (props) => {
  return (
    <>
      <div className="flex items-center">
        <li
          key={() => {
            return props.task;
          }}
          className="w-full border-b border-gray-300 sm:border-b-0 sm:border-r"
        >
          <div className="flex items-center pl-3">
            <input
              id="checkbox-list"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-blue-300 rounded border-gray-300"
              onChange={() => {
                props.removeTask(props.task, props.completed);
                props.addTask(props.task, !props.completed);
              }}
              checked={props.completed}
            />
            <label
              htmlFor="checkbox-list"
              className="py-3 ml-2 w-full text-sm font-medium text-gray-900"
            >
              {props.task}
            </label>
          </div>
        </li>
        <AiOutlineEdit
          className="text-[25px] mx-1 text-blue-700 hover:translate-y-[-2px]"
          onClick={() => {
            props.removeTask(props.task, props.completed);
            props.editTask(props.task);
          }}
        />
        <AiOutlineDelete
          className="text-[25px] mx-3 text-red-700 hover:translate-y-[-2px]"
          onClick={() => {
            props.removeTask(props.task, props.completed);
          }}
        />
      </div>
    </>
  );
};

export default Task;
