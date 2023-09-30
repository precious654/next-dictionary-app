import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: state = {
    value: {
        word: []
    }
}

interface state {
    value: {
        word: any[]
    }
}

export const word = createSlice(
    {
        name: "word",
        initialState,
        reducers: {
            getWord: (state, action: PayloadAction<any>) => {
                return {
                    value: {
                        word: action.payload,
                    }
                }
            }
        }
    }
)

export const {getWord} = word.actions;
export default word.reducer;