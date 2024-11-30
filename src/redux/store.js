import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactSlice"; //reducer

// *** 1.persist ====== копіюємо з з докум.Redux-Persist (для redux-persist)
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; //persist

const persistConfigContacts = {
  key: "contacts", // як буде записано в LocalStorage
  version: 1,
  storage,
  whitelist: ["items"], //вказую, що зберігаю (тільки items, а filter ні)
  //blacklist: ['filter'], //вказую, що не зберігаю
};

//обгортка persist
const persistedReducerContacts = persistReducer(
  persistConfigContacts,
  contactReducer
); ////підключили contactReducer з todoSlice
//=========

//підключаємо counterReducer
//configureStore - каже з яких частин складається 'склад'
export const store = configureStore({
  reducer: {
    contact: persistedReducerContacts,
  },

  // *** 2.persist ↓ копіюємо з з докум.Redux-Persist (для redux-persist)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  //--- ↑ докум.Redux-Persist------
});

// *** 3. persist ↓ копіюємо з з докум.Redux-Persist (для redux-persist)
export let persistor = persistStore(store);
