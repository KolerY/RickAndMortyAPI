import { createSlice } from "@reduxjs/toolkit";

const abonnesSlice = createSlice({
  name: "abonnes",
  initialState: {
    liste: [],
  },
  reducers: {
    modifierAbonne: (state, action) => {
      let nom = action.payload.nom;
      let email = action.payload.email;
      let index = action.payload.index;

      if (index >= 0 && index < state.liste.length) {
        state.liste[index].nom = nom;
        state.liste[index].email = email;
      }
    },
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

export const { modifierAbonne, ajouterAbonne, supprimerAbonne } =
  abonnesSlice.actions;

export default abonnesSlice.reducer;
