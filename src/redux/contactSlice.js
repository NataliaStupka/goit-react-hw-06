import items from "../assets/contacts.json"; //початкові контакти

import { createSlice } from "@reduxjs/toolkit";

//початковий стан
const initialState = {
  items,
  filter: "", // що шукаємо
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload); //пишемо за допомогою imer
    },

    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    //-пошук, те що вводимо в поле пошуку
    changeFilter: (state, action) => {
      state.filter = action.payload;
      console.log("??:", state.filter);
    },
  },
});

//actions
export const { addContact, deleteContact, changeFilter } = slice.actions;

//useSelector
//state - загальний(store), contact - назва слайсу, items/filter - занчення в initialState
export const selectContacts = (state) => state.contact.items;
export const selectNameFilter = (state) => state.contact.filter;

//експортуємо slice (reducer)
export const contactReducer = slice.reducer; //використовуємо в //обгортка persist
