// // // import { ADD_TASK, DELETE_TASK, TOGGLE_COMPLETE } from './actions';

// // // const initialState = {
// // //   tasks: [],
// // // };

// // // export const taskReducer = (state = initialState, action) => {
// // //   switch (action.type) {
// // //     case ADD_TASK:
// // //       return {
// // //         ...state,
// // //         tasks: [...state.tasks, action.payload],
// // //       };
// // //     case DELETE_TASK:
// // //       return {
// // //         ...state,
// // //         tasks: state.tasks.filter(task => task.id !== action.payload),
// // //       };
// // //     case TOGGLE_COMPLETE:
// // //       return {
// // //         ...state,
// // //         tasks: state.tasks.map(task =>
// // //           task.id === action.payload ? { ...task, completed: !task.completed } : task
// // //         ),
// // //       };
// // //     default:
// // //       return state;
// // //   }
// // // };

// // import { ADD_TASK, DELETE_TASK, TOGGLE_COMPLETE } from './actions';

// // const initialState = {
// //   tasks: JSON.parse(localStorage.getItem('tasks')) || [], // Load tasks from local storage or initialize with an empty array
// // };

// // export const taskReducer = (state = initialState, action) => {
// //   switch (action.type) {
// //     case ADD_TASK:
// //       const updatedTasksAdd = [...state.tasks, action.payload];
// //       localStorage.setItem('tasks', JSON.stringify(updatedTasksAdd)); // Save to local storage
// //       return {
// //         ...state,
// //         tasks: updatedTasksAdd,
// //       };
// //     case DELETE_TASK:
// //       const updatedTasksDelete = state.tasks.filter(task => task.id !== action.payload);
// //       localStorage.setItem('tasks', JSON.stringify(updatedTasksDelete)); // Save to local storage
// //       return {
// //         ...state,
// //         tasks: updatedTasksDelete,
// //       };
// //     case TOGGLE_COMPLETE:
// //       const updatedTasksToggle = state.tasks.map(task =>
// //         task.id === action.payload ? { ...task, completed: !task.completed } : task
// //       );
// //       localStorage.setItem('tasks', JSON.stringify(updatedTasksToggle)); // Save to local storage
// //       return {
// //         ...state,
// //         tasks: updatedTasksToggle,
// //       };
// //     default:
// //       return state;
// //   }
// // };

// import { ADD_TASK, DELETE_TASK, TOGGLE_COMPLETE, SET_TASK_TIME } from './actions';

// const initialState = {
//   tasks: JSON.parse(localStorage.getItem('tasks')) || [],
// };

// export const taskReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TASK:
//       const updatedTasksAdd = [...state.tasks, action.payload];
//       localStorage.setItem('tasks', JSON.stringify(updatedTasksAdd));
//       return {
//         ...state,
//         tasks: updatedTasksAdd,
//       };
//     case DELETE_TASK:
//       const updatedTasksDelete = state.tasks.filter(task => task.id !== action.payload);
//       localStorage.setItem('tasks', JSON.stringify(updatedTasksDelete));
//       return {
//         ...state,
//         tasks: updatedTasksDelete,
//       };
//     case TOGGLE_COMPLETE:
//       const updatedTasksToggle = state.tasks.map(task =>
//         task.id === action.payload ? { ...task, completed: !task.completed } : task
//       );
//       localStorage.setItem('tasks', JSON.stringify(updatedTasksToggle));
//       return {
//         ...state,
//         tasks: updatedTasksToggle,
//       };
//     case SET_TASK_TIME:
//       const updatedTasksSetTime = state.tasks.map(task =>
//         task.id === action.payload.id ? { ...task, time: action.payload.time } : task
//       );
//       localStorage.setItem('tasks', JSON.stringify(updatedTasksSetTime));
//       return {
//         ...state,
//         tasks: updatedTasksSetTime,
//       };
//     default:
//       return state;
//   }
// };


// import { ADD_TASK, DELETE_TASK, TOGGLE_COMPLETE, SET_TASK_TIME, UPDATE_TASK_STATUS } from './actions';

// const initialState = {
//   tasks: JSON.parse(localStorage.getItem('tasks')) || [],
// };

// export const taskReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TASK:
//       const updatedTasksAdd = [...state.tasks, { ...action.payload, status: 'Pending' }];
//       localStorage.setItem('tasks', JSON.stringify(updatedTasksAdd));
//       return {
//         ...state,
//         tasks: updatedTasksAdd,
//       };
//     case DELETE_TASK:
//       const updatedTasksDelete = state.tasks.filter(task => task.id !== action.payload);
//       localStorage.setItem('tasks', JSON.stringify(updatedTasksDelete));
//       return {
//         ...state,
//         tasks: updatedTasksDelete,
//       };
//     case TOGGLE_COMPLETE:
//       const updatedTasksToggle = state.tasks.map(task =>
//         task.id === action.payload ? { ...task, completed: !task.completed, status: task.completed ? 'Undone' : 'Done' } : task
//       );
//       localStorage.setItem('tasks', JSON.stringify(updatedTasksToggle));
//       return {
//         ...state,
//         tasks: updatedTasksToggle,
//       };
//     case SET_TASK_TIME:
//       const updatedTasksSetTime = state.tasks.map(task =>
//         task.id === action.payload.id ? { ...task, time: action.payload.time } : task
//       );
//       localStorage.setItem('tasks', JSON.stringify(updatedTasksSetTime));
//       return {
//         ...state,
//         tasks: updatedTasksSetTime,
//       };
//     case UPDATE_TASK_STATUS:
//       const updatedTasksStatus = state.tasks.map(task =>
//         task.id === action.payload.id ? { ...task, status: action.payload.status } : task
//       );
//       localStorage.setItem('tasks', JSON.stringify(updatedTasksStatus));
//       return {
//         ...state,
//         tasks: updatedTasksStatus,
//       };
//     default:
//       return state;
//   }
// };

import { ADD_TASK, DELETE_TASK, UPDATE_TASK_STATUS } from './actions';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const updatedTasksAdd = [...state.tasks, action.payload];
      localStorage.setItem('tasks', JSON.stringify(updatedTasksAdd));
      return {
        ...state,
        tasks: updatedTasksAdd,
      };
    case DELETE_TASK:
      const updatedTasksDelete = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(updatedTasksDelete));
      return {
        ...state,
        tasks: updatedTasksDelete,
      };
    case UPDATE_TASK_STATUS:
      const updatedTasksStatus = state.tasks.map(task =>
        task.id === action.payload.id ? { ...task, status: action.payload.status } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasksStatus));
      return {
        ...state,
        tasks: updatedTasksStatus,
      };
    default:
      return state;
  }
};

