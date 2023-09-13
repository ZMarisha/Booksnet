import React, { useState, ChangeEvent } from "react";
import d from './SearchEngine.module.css';
import { useAppDispatch, useAppSelector } from "../../hook";
import { changeText, fetchBookList, removePrevItems } from "../../store/bookListSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faMagnifyingGlass);

const SearchEngine:React.FC = () => {
    

    const dispatch = useAppDispatch();
    const searchText = useAppSelector(state => state.bookListSlice.value);
    const disabled = useAppSelector(state => state.bookListSlice.disabled);
    const [sorting, setSorting] = useState('relevance')

    const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        dispatch(changeText(value))
    }

    const handleKeyDown = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            dispatch(fetchBookList({value: searchText}));
            dispatch(removePrevItems());
        }
    }

    const handleBtn = () => {
        dispatch(fetchBookList({value: searchText}));
        dispatch(removePrevItems());
    }

    const handleBySorting = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSorting(value)
        dispatch(fetchBookList({value: searchText, sortingBy: value}))
    }

    const isOpacity = disabled ? .3 : 1;

    return (
        <div className={d.searchEngine}>
            <div className={d.search}>
                <input className={d.searchField} type="text" placeholder="Search..." onChange={handleValue} onKeyDown={handleKeyDown} disabled={disabled}/>
                <button onClick={handleBtn} disabled={disabled} className={d.searchBtn}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className={d.searchCategories}>
                <p><span style={{opacity: isOpacity}}>Sorting by</span>
                    <select className={d.options} onChange={handleBySorting} value={sorting} disabled={disabled}>
                        <option value='relevance'>relevance</option>
                        <option value='newest'>newest</option>
                    </select>
                </p>
            </div>
        </div>
    )
}

export default SearchEngine;