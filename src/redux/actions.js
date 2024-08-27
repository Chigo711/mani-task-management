

// // export const ADD_TASK = 'ADD_TASK';
// // export const DELETE_TASK = 'DELETE_TASK';
// // export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
// // export const SET_TASK_TIME = 'SET_TASK_TIME';

// // export const addTask = (task) => ({
// //   type: ADD_TASK,
// //   payload: task,
// // });

// // export const deleteTask = (id) => ({
// //   type: DELETE_TASK,
// //   payload: id,
// // });

// // export const toggleComplete = (id) => ({
// //   type: TOGGLE_COMPLETE,
// //   payload: id,
// // });

// // export const setTaskTime = (id, time) => ({
// //   type: SET_TASK_TIME,
// //   payload: { id, time },
// // });

// export const ADD_TASK = 'ADD_TASK';
// export const DELETE_TASK = 'DELETE_TASK';
// export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
// export const SET_TASK_TIME = 'SET_TASK_TIME';
// export const UPDATE_TASK_STATUS = 'UPDATE_TASK_STATUS';

// export const addTask = (task) => ({
//   type: ADD_TASK,
//   payload: task,
// });

// export const deleteTask = (id) => ({
//   type: DELETE_TASK,
//   payload: id,
// });

// export const toggleComplete = (id) => ({
//   type: TOGGLE_COMPLETE,
//   payload: id,
// });

// export const setTaskTime = (id, time) => ({
//   type: SET_TASK_TIME,
//   payload: { id, time },
// });

// export const updateTaskStatus = (id, status) => ({
//   type: UPDATE_TASK_STATUS,
//   payload: { id, status },
// });

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK_STATUS = 'UPDATE_TASK_STATUS';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const updateTaskStatus = (id, status) => ({
  type: UPDATE_TASK_STATUS,
  payload: { id, status },
});
