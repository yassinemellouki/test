import useTasks from "../hooks/useTasks";
import { TaskType } from "../state/slices/tasksSlice";

const Tasks = () => {

  const { data, newTask, setNewTask, addTask, toggleTask, deleteTask } =
    useTasks();

  return (
    <div className="shadow-md rounded p-2 m-auto max-w-lg w-full">
      <h2 className="text-lg font-semibold mb-5">Tasks List</h2>
      <form onSubmit={addTask} className="mb-4">
        <div className="flex items-center">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded mr-2"
            placeholder="Add a new todo..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </form>
      <ul>
        {data &&
          data.map((task: TaskType) => (
            <li
              key={task.id}
              className={`flex items-center justify-between p-2 mb-2 border rounded ${
                task.completed ? "bg-green-100" : "bg-blue-100"
              }`}
            >
              <span
                className={`text-base ${
                  task.completed
                    ? "line-through text-green-600"
                    : "text-blue-600"
                }`}
              >
                {task.title}
              </span>
              <div className="flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() =>
                    toggleTask({ ...task, completed: !task.completed })
                  }
                  className="form-checkbox h-5 w-5 text-green-600 mr-3"
                />
                <button
                  onClick={() => deleteTask({ id: task.id })}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Tasks;
