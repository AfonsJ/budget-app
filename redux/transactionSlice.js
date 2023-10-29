import { createSlice} from "@reduxjs/toolkit";

const transactionSlice = createSlice({
    name: 'transactions',
    initialState: {trans:[]},
    reducers: {
        addTransaction: {
            reducer: (state, action) => {
                state.trans.push(action.payload);
            }   
        },
        removeTransaction :{
            reducer: (state,action) => {
                const newTrans = state.trans.filter(transaction=> transaction.key !== action.payload);
                state.trans = newTrans
            }
        }
    }
});

export const {addTransaction, removeTransaction} = transactionSlice.actions;
export default transactionSlice.reducer;

