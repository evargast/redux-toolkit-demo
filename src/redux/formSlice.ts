import { CalendarDate } from "@internationalized/date";
import { Draft, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type AnimalTypes = "dogs" | "cats" | "dragons";
type FrequencyTypes = "rarely" | "sometimes" | "always";

const date = new Date();

const initialState = {
    name: "Hello",
    lastName: "World",
    animal: "dogs" as AnimalTypes,
    date: new CalendarDate(date.getFullYear(), date.getMonth(), date.getDate()),
    frequency: "rarely" as FrequencyTypes,
};

export type FormState = typeof initialState;

export const formSlice = createSlice({
    name: "formState",
    initialState: initialState as FormState,
    reducers: {
        updateFormState: <T extends keyof FormState>(
            state: Draft<FormState>,
            action: PayloadAction<{
                type: T;
                value: FormState[T];
            }>,
        ) => {
            state[action.payload.type] = action.payload.value;
        },
    },
    extraReducers: {
        //todo figure out how to use this
    },
});

// Action creators are generated for each case reducer function
export const { updateFormState } = formSlice.actions;

export default formSlice.reducer;
