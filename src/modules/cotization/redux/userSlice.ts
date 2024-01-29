import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:'',
    lastName:'',
    birthDay:'',
    numberDocument:'',
    telephone:'',
    user:'',
    plans:'',
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        // getUser: (state, action) => {
        //     const { name,lastName, birthDay } = action.payload;
        //     state.name = name;
        //     state.lastName = lastName;
        //     state.birthDay = birthDay;
        // },

        getUser: (state, action) => {
            state.user = action.payload
        },

        getPlans: (state, action) => {
            state.plans = action.payload
        },

        getPaymentResponsible: (state, action) => {
            const {numberDocument,telephone} = action.payload;
            state.numberDocument = numberDocument;
            state.telephone = telephone;
        }
    }
})

export const { getUser, getPlans, getPaymentResponsible} = userSlice.actions;
export default userSlice.reducer;