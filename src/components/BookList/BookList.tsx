import React, { useState, useEffect } from "react";
import Books from '../Books/Books';
import d from './BookList.module.css';
import { IBook } from "./IBooks";
import { useAppDispatch, useAppSelector } from "../../hook";
import Loading from "../Loading/Loading";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { changeDisableforInput, fetchBookList } from "../../store/bookListSlice";
import { Link } from "react-router-dom";
import Error from "../Error/Error";

const BookList:React.FC = () => {

    const dispatch = useAppDispatch();
    const {isLoading, error, items, bookList } = useAppSelector(state => state.bookListSlice);
    const [startIndex, setStartIndex] = useState(0);
    const value = useAppSelector(state => state.bookListSlice.value)
    const maxResults = 10
    

    useEffect(() => {
        dispatch(changeDisableforInput(false))
    }, [])


    const handleLoadMore = () => {
        setStartIndex(starIndex => starIndex + 10)
        dispatch(fetchBookList({value, startIndex: startIndex + maxResults}))
    }



    return (
        <>
        {isLoading && <div style={{display:'flex', justifyContent: 'center', height: '70px'}}><Loading /></div>}
        {error ? <div style={{textAlign: 'center'}}><Error /></div> : ''}
        {bookList ? <div><h3 className={d.countFoundBook} key={bookList.totalItems}>Found {bookList.totalItems} results</h3>
            <div className={d.bookList}>
                {items?.map((book: IBook) => 
                <Link key={book.etag} to={`/${book.id}`} className={d.link}>
                <Books bookCover={book.volumeInfo.imageLinks?.thumbnail || ''} 
                title={book.volumeInfo.title || ''} 
                authors={book.volumeInfo.authors} 
                categories={book.volumeInfo.categories}/>
            </Link>
            )}
            </div>
            <div className={d.btnLoad}>
                <LoadMoreBtn handleLoadMore={handleLoadMore} disabled={false}/>
            </div>
        </div> : null}
        </>
    )
}

export default BookList;