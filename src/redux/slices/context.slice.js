import { createSlice } from "@reduxjs/toolkit";
import { get, save } from "../../utils/localStorage";

const contextSlice = createSlice({
  name: "context",
  initialState: {
    logout: false,
  },
  reducers: {
    toggleLogout: (prevState, action) => {
      return {
        ...prevState,
        logout: !prevState.logout,
      };
    },
    openLogout: (prevState, action) => {
      const users = JSON.parse(get('users'));
      const userLogged = users.find(user => user.isLogged);
      userLogged.isLogged = false;
      save('users', JSON.stringify(users));
      window.location.href = 'http://localhost:3000/';
      return {
        ...prevState,
        logout: true,
      };
    },
    closeLogout: (prevState, action) => {
      return {
        ...prevState,
        logout: false,
      };
    },
  },
});

export const contextAct = contextSlice.actions;
export default contextSlice.reducer;
