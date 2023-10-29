import { createSlice} from "@reduxjs/toolkit";

const goalSlice = createSlice({
    name: 'goals',
    initialState: {goals:[]},
    reducers: {
        addGoal : {
            reducer: (state, action) => {
                state.goals.push(action.payload);
            }
        },
        removeGoal : {
            reducer: (state, action) => {
                const newGoals = state.goals.filter(goal => goal.key !== action.payload);
                state.goals = newGoals;
            }
        }
    }
});

export const {addGoal, removeGoal} = goalSlice.actions;
export default goalSlice.reducer;
