import { IBook } from './../components/BookList/IBooks';
import { createAsyncThunk, createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import { IBooks } from "../components/BookList/IBooks";


interface IBookList {
    value: string,
    bookList: IBooks[] | any,
    items: IBook[]
    error: string,
    isLoading: boolean,
    disabled: boolean,
}


const initialState:IBookList = {
    value: '',
    bookList: null,
    items: [],
    error: '',
    isLoading: false,
    disabled: false,
}

interface IFetchBookList {
    value: string,
    startIndex?: number,
    sortingBy?: string,
}


export const fetchBookList = createAsyncThunk<IBookList, IFetchBookList, {rejectValue: string}>(
'bookList/fetchBookList',
async function ({value, startIndex = 0, sortingBy = 'relevance'}, {rejectWithValue}) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&key=AIzaSyDAk_4-rlsJwxQZsPAiX8QExVmnjTzdhgA&startIndex=${startIndex}&maxResults=10&orderBy=${sortingBy}`);
    const data = await response.json();
    console.log(data)

    if(!response.ok) {
        return rejectWithValue('Server ERROR')
    }

    return data
}
);



const bookListSlice = createSlice({
    name: 'bookList',
    initialState,
    reducers: {
        changeText: (state, action:PayloadAction<string>) => {
            state.value = action.payload;
        },
        selectedCategories: (state) => {
            state.items = [];
        },
        removePrevItems: (state) => {
            state.items.length = 0;
        },
        changeDisableforInput: (state, action) => {
            state.disabled = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBookList.pending, (state) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(fetchBookList.fulfilled, (state, action:PayloadAction<IBookList>) => {
                state.bookList = action.payload;
                state.items = [...state.items, ...action.payload.items.map(item => ({ ...item }))]
                state.isLoading = false;
            })
            .addMatcher(isError, (state, action:PayloadAction<string>) => {
                state.error = action.payload;
                state.isLoading = false;
            })
    }
})


export const { changeText, removePrevItems, changeDisableforInput } = bookListSlice.actions;
export default bookListSlice.reducer;

function isError(action:AnyAction) {
    return action.type.endsWith('rejected');
}