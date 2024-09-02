import { createSlice } from "@reduxjs/toolkit";

export interface TasksType {
  isLoading: boolean | null;
  isError: string | null;
  data: TaskType[] | null;
}

export interface TaskType {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

const initialState: TasksType = {
  isLoading: null,
  isError: null,
  data: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    tasksRequest(state) {
      state.isLoading = true;
      state.isError = null;
    },
    getTasksSuccess(state, action) {
      state.data = action.payload;
      state.isLoading = false;
    },
    getTasksFailure(state, action) {
      state.isError = action.payload;
      state.isLoading = false;
    },
    updateTaskRequest(state, action) {
      state.isLoading = true;
      state.isError = null;
    },
    updateTaskSuccess(state, action) {
      const taskId = action.payload.id;
      let updatedData = null;
      if (state.data) {
        updatedData = [...state.data];
        const userIndex = state.data.findIndex((task) => task.id === taskId);

        if (userIndex !== -1) {
          updatedData[userIndex] = action.payload;
        } else {
          updatedData.push(action.payload);
        }
      }
      state.data = updatedData;
      state.isLoading = false;
    },
    updateTaskFailure(state, action) {
      state.isError = action.payload;
      state.isLoading = false;
    },
    deleteTaskRequest(state, action) {
      state.isLoading = true;
      state.isError = null;
    },
    deleteTaskSuccess(state, action) {
      const taskId = action.payload.id;
      let updatedData = null;
      if (state.data) {
        updatedData = [...state.data];
        updatedData = state.data.filter((task) => task.id !== taskId);
      }
      state.data = updatedData;
      state.isLoading = false;
    },
    deleteTaskFailure(state, action) {
      state.isError = action.payload;
      state.isLoading = false;
    },
    addTaskRequest(state, action) {
      state.isLoading = true;
      state.isError = null;
    },
    addTaskSuccess(state, action) {
      if (state.data) {
        state.data = [...state.data, action.payload];
      } else {
        state.data = [action.payload];
      }
      state.isLoading = false;
    },
    addTaskFailure(state, action) {
      state.isError = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  tasksRequest,
  getTasksSuccess,
  getTasksFailure,
  updateTaskRequest,
  updateTaskSuccess,
  updateTaskFailure,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskFailure,
  addTaskRequest,
  addTaskSuccess,
  addTaskFailure,
} = tasksSlice.actions;

export default tasksSlice.reducer;
