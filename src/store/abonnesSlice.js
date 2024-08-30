import { createSlice } from "@reduxjs/toolkit";

const abonnesSlice = createSlice({
  name: "abonnes",
  initialState: {
    liste: [],
  },
  reducers: {
    ajouterAbonne: (state, action) => {
      state.liste.push(action.payload);
    },
    supprimerAbonne: (state, action) => {
      state.liste = state.liste.filter(
        (abonne) => abonne.email !== action.payload.email
      );
    },
  },
});

export const {  ajouterAbonne, supprimerAbonne } =
  abonnesSlice.actions;

export default abonnesSlice.reducer;
