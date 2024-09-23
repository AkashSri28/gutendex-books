import React, { useEffect, useRef, useState } from 'react'
import { FaArrowLeft, FaSearch, FaTimes } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom';
import styles from './BooksPage.module.css';
import useFetchBooks from '../hooks/useFetchBooks';

function BooksPage() {
    const {category} = useParams()
    const {books, fetchBooks} = useFetchBooks();
    const booksGridRef = useRef(null);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
      fetchBooks(category, searchTerm, false);
    
    }, [category, searchTerm])

    const handleBack = ()=>{
        navigate(-1)
    }

    const handleScroll = ()=>{
        if(booksGridRef.current){
            const {scrollTop, scrollHeight, clientHeight} = booksGridRef.current;
            // console.log(Math.ceil(scrollTop), scrollHeight, clientHeight);
            if(scrollTop+clientHeight >= scrollHeight - 300){
                // console.log("reached end");
                fetchBooks(category, searchTerm, true)
            }
        }
    }

    const handleSearch = (e)=>{
        setSearchTerm(e.target.value)
    }

    const handleBookClick = (book)=>{
        let bookUrl = '';
       
        if (book.formats['text/html'] && !book.formats['text/html'].includes('zip')) {
            bookUrl = book.formats['text/html'];  
        } else if (book.formats['application/pdf'] && !book.formats['application/pdf'].includes('zip')) {
            bookUrl = book.formats['application/pdf'];  
        } else if (book.formats['text/plain'] && !book.formats['text/plain'].includes('zip')) {
            bookUrl = book.formats['text/plain'];  
        }

        if(bookUrl){
            window.open(bookUrl, '_blank')
        }
        else{
            alert('No viewable version available');
        }
    }

    const clearSearch = ()=>{
        console.log(searchTerm)
        setSearchTerm('');
        console.log(searchTerm)
    }
    
  return (
    <div className={styles.booksPageContainer}>
        <h1 className={styles.pageTitle}>
            <FaArrowLeft className={styles.backBtn} onClick={handleBack}/>{category}
        </h1>
        <div className={styles.searchContainer}>
            <input
                type='text'
                placeholder='Search'
                className={styles.searchInput}
                onChange={handleSearch}
                value={searchTerm}
            />

            {searchTerm && (
                <FaTimes className={styles.cancelIcon} onClick={clearSearch}/>
            )}
            <FaSearch className={styles.searchIcon}/>

        </div>
        
        <div 
            className={styles.booksGrid}
            onScroll={handleScroll}
            ref={booksGridRef}
        >
            {books.length>0?
            (books.map((book)=>(
                <div 
                    key={book.id} 
                    className={styles.bookCard}
                    onClick={()=>handleBookClick(book)}
                >
                    <img
                        src={book.formats["image/jpeg"]}
                        className={styles.bookCover}
                    />
                    <p>{book.title.toUpperCase()}</p>
                    {book.authors.map((author)=>{
                        const [lastName, firstName] = author.name.split(', ')
                        return <p className={styles.bookAuthor}>{`${firstName} ${lastName}`}</p>
                    }                        
                    )}
                </div>
            ))):
            (<p>No Books found</p>)
            }
        </div>
    </div>
  )
}

export default BooksPage