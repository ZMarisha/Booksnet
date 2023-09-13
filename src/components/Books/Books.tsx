import React from "react";
import d from './Books.module.css';


type IBook = {
    bookCover: string,
    title: string,
    authors: string[]
    categories: string[]
}

const Books:React.FC<IBook> = ({bookCover, title, authors, categories}) => {

    return (
            <div className={d.book}>
                <div className={d.bookCover}>
                    <img src={bookCover} alt='book cover'/>
                </div>
                <div className={d.bookText}>
                    <p className={d.bookCategories}>{categories?.length >= 1 ? categories[0] : ''}</p>
                    <h4 className={d.bookTitle}>{title}</h4>
                    <div>
                        {authors?.map(author => <p key={author}>{author}</p>)}
                    </div>
                </div>
            </div>
    )
}

export default Books;