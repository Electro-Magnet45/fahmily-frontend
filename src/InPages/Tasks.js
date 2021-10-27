import React, { useState } from "react";
import "./Tasks.css";
import { Plus } from "@styled-icons/bootstrap";
import man_2 from "../assets/man_2.png";
import woman_2 from "../assets/woman_2.png";

const TaskItem = ({ dragStart, dragEnd, task }) => {
  return (
    <div
      className="taskItem"
      draggable={true}
      onDragStart={dragStart}
      onDragEnd={dragEnd}
    >
      <div className="taskItem_container">
        <div className="taskItem-cont_title">{task.name}</div>
        <div className="taskItem-cont_tools">
          <div className="taskItem-tools_users">
            <img src={man_2} alt="" />
            <img src={woman_2} alt="" />
          </div>
          <div className={`taskItems-tools_priority ${task.priority}`}>
            {task.priority}
          </div>
        </div>
      </div>
    </div>
  );
};

const Tasks = () => {
  const [tasks, setTasks] = useState({
    todo: [
      {
        _id: 1,
        name: "This is a Todo",
        priority: "Low",
      },
      {
        _id: 2,
        name: "This is a second Todo",
        priority: "Medium",
      },
    ],
    inProgress: [
      {
        _id: 3,
        name: "This is a In Progress",
        priority: "Low",
      },
      {
        _id: 4,
        name: "This is a asdasd In Progress",
        priority: "Low",
      },
    ],
    done: [
      {
        _id: 5,
        name: "This is a Done",
        priority: "High",
      },
      {
        _id: 6,
        name: "This is a fdgdf gfdgdf rtretert  Done",
        priority: "Low",
      },
      {
        _id: 7,
        name: "This is a Third Done",
        priority: "Medium",
      },
      {
        _id: 8,
        name: "This is a Fourth Done",
        priority: "Low",
      },
    ],
  });
  let draggableTodo = null;

  const dragStart = (event) => {
    draggableTodo = event.target;
    setTimeout(() => {
      event.target.classList.add("dragStart");
    }, 0);
    document.querySelectorAll(".taskItem").forEach((e) => {
      if (e !== draggableTodo) e.classList.add("pointerNone");
    });
  };
  const dragEnd = (event) => {
    draggableTodo = null;
    setTimeout(() => {
      event.target.classList.remove("dragStart");
    }, 0);
    document
      .querySelectorAll(".taskItem")
      .forEach((e) => e.classList.remove("pointerNone"));
  };
  const dragOver = (event) => {
    event.preventDefault();
    event.target.classList.add("dragOver");
  };
  const dragLeave = (event) => event.target.classList.remove("dragOver");
  const dragDrop = (event) => {
    event.preventDefault();
    if (!event.target.contains(draggableTodo))
      event.target.appendChild(draggableTodo);
    event.target.classList.remove("dragOver");
  };

  return (
    <div className="tasks">
      <div className="tasks_container">
        <h1>Tasks</h1>
        <div className="tasks-cont_menu"></div>
        <div className="tasks-cont_body">
          <div
            className="tasks-body_child"
            onDragOver={dragOver}
            onDragLeave={dragLeave}
            onDrop={dragDrop}
          >
            <div className="tasks-bd_title">
              <h3>To Do</h3>
              <div className="tasks-child_status">{tasks.todo.length}</div>
              <div className="tasks-child_add">
                <Plus />
              </div>
            </div>
            {tasks.todo.map((todo) => {
              return (
                <TaskItem
                  id={todo._id}
                  dragStart={dragStart}
                  dragEnd={dragEnd}
                  task={todo}
                />
              );
            })}
          </div>
          <div
            className="tasks-body_child "
            onDragOver={dragOver}
            onDragLeave={dragLeave}
            onDrop={dragDrop}
          >
            <div className="tasks-bd_title">
              <h3>In Progress</h3>
              <div className="tasks-child_status">
                {tasks.inProgress.length}
              </div>
              <div className="tasks-child_add">
                <Plus />
              </div>
            </div>
            {tasks.inProgress.map((inprogress) => {
              return (
                <TaskItem
                  id={inprogress._id}
                  dragStart={dragStart}
                  dragEnd={dragEnd}
                  task={inprogress}
                />
              );
            })}
          </div>
          <div
            className="tasks-body_child"
            onDragOver={dragOver}
            onDragLeave={dragLeave}
            onDrop={dragDrop}
          >
            <div className="tasks-bd_title">
              <h3>Done</h3>
              <div className="tasks-child_status">{tasks.done.length}</div>
              <div className="tasks-child_add">
                <Plus />
              </div>
            </div>
            {tasks.done.map((done) => {
              return (
                <TaskItem
                  id={done._id}
                  dragStart={dragStart}
                  dragEnd={dragEnd}
                  task={done}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
