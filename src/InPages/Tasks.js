import React, { useState } from "react";
import "./Tasks.css";
import { Plus } from "@styled-icons/bootstrap";
import man_2 from "../assets/man_2.png";
import woman_2 from "../assets/woman_2.png";
import { ReactSortable } from "react-sortablejs";

const TaskItem = ({ task }) => {
  return (
    <div className="taskItem">
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

const DraggableElement = ({ list, setList, updateFunc }) => {
  return (
    <ReactSortable
      group="tasks_group"
      list={list}
      setList={setList}
      animation={200}
      delay={1}
      className="task-child_drag"
      onEnd={updateFunc}
    >
      {list.map((e) => {
        return <TaskItem key={e._id} task={e} />;
      })}
    </ReactSortable>
  );
};

const Tasks = () => {
  const [todo, setTodo] = useState([
    {
      name: "This is a Todo",
      priority: "low",
      _id: 1234,
      selected: false,
      chosen: false,
    },
  ]);
  const [inProgress, setInProgress] = useState([
    {
      _id: 3456,
      name: "This is a In Progress",
      priority: "low",
      selected: false,
    },
    {
      name: "This is a second Todo",
      priority: "medium",
      _id: 2345,
      selected: false,
      chosen: false,
    },
    {
      name: "This is a asdasd In Progress",
      priority: "high",
      _id: 4567,
      selected: false,
      chosen: false,
    },
  ]);
  const [done, setDone] = useState([
    {
      _id: 5678,
      name: "This is a Done",
      priority: "high",
    },
    {
      _id: 6789,
      name: "This is a fdgdf gfdgdf rtretert  Done",
      priority: "low",
    },
    {
      _id: 7890,
      name: "This is a Third Done",
      priority: "medium",
    },
    {
      _id: 8901,
      name: "This is a Fourth Done",
      priority: "low",
    },
  ]);

  const updateFunc = () => {};

  return (
    <div className="tasks">
      <div className="tasks_container">
        <h1>Tasks</h1>
        <div className="tasks-cont_body">
          <div className="tasks-body_child">
            <div className="tasks-bd_title">
              <h3>To Do</h3>
              <div className="tasks-child_status">{todo.length}</div>
              <div className="tasks-child_add">
                <Plus />
              </div>
            </div>
            <DraggableElement
              list={todo}
              setList={setTodo}
              updateFunc={updateFunc}
            />
          </div>
          <div className="tasks-body_child ">
            <div className="tasks-bd_title">
              <h3>In Progress</h3>
              <div className="tasks-child_status">{inProgress.length}</div>
              <div className="tasks-child_add">
                <Plus />
              </div>
            </div>
            <DraggableElement
              list={inProgress}
              setList={setInProgress}
              updateFunc={updateFunc}
            />
          </div>
          <div className="tasks-body_child">
            <div className="tasks-bd_title">
              <h3>Done</h3>
              <div className="tasks-child_status">{done.length}</div>
              <div className="tasks-child_add">
                <Plus />
              </div>
            </div>
            <DraggableElement
              list={done}
              setList={setDone}
              updateFunc={updateFunc}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
