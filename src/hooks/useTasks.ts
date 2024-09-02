import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { useEffect, useState } from "react";
import {
  updateTaskRequest,
  tasksRequest,
  TasksType,
  deleteTaskRequest,
  addTaskRequest,
  TaskType,
} from "../state/slices/tasksSlice";

const useTasks = () => {
  const { isError, data }: TasksType = useSelector(
    (state: RootState) => state.tasks
  );
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    dispatch(tasksRequest());
  }, [dispatch]);

  const toggleTask = (taskUpdate: TaskType) => {
    dispatch(updateTaskRequest(taskUpdate));
  };

  const deleteTask = (data: { id: number }) => {
    dispatch(deleteTaskRequest(data));
  };

  const addTask = (e: any) => {
    e.preventDefault();
    if (newTask.trim() === "") return;

    const newtaskItem = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };

    dispatch(addTaskRequest(newtaskItem));

    setNewTask("");
  };

  return {
    isError,
    data,
    newTask,
    setNewTask,
    toggleTask,
    deleteTask,
    addTask,
  };
};

export default useTasks;
