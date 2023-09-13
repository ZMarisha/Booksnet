import React from "react";
import SearchEngine from "../SearchEngine/SearchEngine";
import d from './SearchBar.module.css';


const SearchBar:React.FC= () => {

    return (
        <div className={`${d.search} ${d.bgrImage}`}>
            <h1 className={d.searchTittle}>Search for Book</h1>
            <SearchEngine />
        </div>
    )
}

export default SearchBar;