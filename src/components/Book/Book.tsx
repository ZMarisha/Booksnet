import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hook";
import { IBook } from "../BookList/IBooks";
import d from './Book.module.css';
import BtnBack from "../BtnBack/BtnBack";
import { changeDisableforInput } from "../../store/bookListSlice";


const Book:React.FC = () => {

    let { id } = useParams();
    const dispatch = useAppDispatch()
    const { items } = useAppSelector(state => state.bookListSlice);


    useEffect(() => {
        dispatch(changeDisableforInput(true))
    }, [])
  
    let book = items?.find((item: IBook) => item.id === id)

    return (
        <>
        <BtnBack />
        <div className={d.book}>
            <div className={d.bookCover}>
                <img src={book?.volumeInfo.imageLinks?.thumbnail || ''} alt='book cover'/>
            </div>
            <div className={d.bookText}>
            {book?.volumeInfo?.categories?.map((item:string) => <p key={item} className={d.categories}>{item}</p>)}
                <h4 className={d.bookTitle}>Tittle{book?.volumeInfo?.title || ''}</h4>
                <div style={{opacity: '.7'}}>
                    {book?.volumeInfo?.authors?.map((author: string) => <p key={author}>{author}</p>)}
                </div>
                <div style={{margin: '30px 0'}}>
                    <p>{book?.volumeInfo?.description}</p>
                </div>
                <p>Pages: {book?.volumeInfo?.pageCount}</p>
                <p>Published: {book?.volumeInfo?.publishedDate}</p>
            </div>
        </div>
        </>
    )
}

export default Book;