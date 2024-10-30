import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistConfigFilter = {
  key: 'saveFilter',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, contactsReducer)

const persistedReducerFilter = persistReducer(persistConfigFilter, filtersReducer)


export const store = configureStore({
    reducer: {
        contact: persistedReducer,
        filter: persistedReducerFilter,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export let persistor = persistStore(store)


