import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from './user.js';
import topItemsReducer from './topItems';

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: {
        // Ignore these action types
        ignoredActions: ['getTopItems'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
    }
  })

export default configureStore({
    reducer: {
        user: userReducer,
        topItems: topItemsReducer,
        
    },
    middleware: customizedMiddleware
})