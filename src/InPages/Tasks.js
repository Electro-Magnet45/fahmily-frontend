import React, { useState } from "react";
import "./Tasks.css";
import { Plus } from "@styled-icons/bootstrap";
import man_2 from "../assets/man_2.png";
import woman_2 from "../assets/woman_2.png";
import { ReactSortable } from "react-sortablejs";
import { useKeyPress } from "../keyShortcut";

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

const DraggableElement = ({ list, setList, cloneMode }) => {
  return (
    <ReactSortable
      group={cloneMode ? { name: "tasks_group", pull: "clone" } : "tasks_group"}
      list={list}
      setList={setList}
      animation={200}
      delay={1}
      className="task-child_drag"
    >
      {list.map((e) => {
        return <TaskItem key={e._id} task={e} />;
      })}
    </ReactSortable>
  );
};

const Tasks = () => {
  const [cloneMode, setCloneMode] = useState(false);
  const [todo, setTodo] = useState([
    {
      _id: 12434234234,
      name: "This is a Todo",
      priority: "Low",
    },
    {
      _id: 23435346345,
      name: "This is a second Todo",
      priority: "Medium",
    },
  ]);
  const [inProgress, setInProgress] = useState([
    {
      _id: 35435345345,
      name: "This is a In Progress",
      priority: "Low",
    },
    {
      _id: 4345345345,
      name: "This is a asdasd In Progress",
      priority: "High",
    },
  ]);
  const [done, setDone] = useState([
    {
      _id: 5453453454,
      name: "This is a Done",
      priority: "High",
    },
    {
      _id: 643534534,
      name: "This is a fdgdf gfdgdf rtretert  Done",
      priority: "Low",
    },
    {
      _id: 7435345345,
      name: "This is a Third Done",
      priority: "Medium",
    },
    {
      _id: 85345345345,
      name: "This is a Fourth Done",
      priority: "Low",
    },
  ]);
  useKeyPress(() => setCloneMode((prev) => !prev), 76);

  return (
    <div className="tasks">
      <div className="tasks_container">
        <h1>Tasks</h1>
        <div className="tasks-cont_menu"></div>
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
              cloneMode={cloneMode}
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
              cloneMode={cloneMode}
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
              cloneMode={cloneMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
