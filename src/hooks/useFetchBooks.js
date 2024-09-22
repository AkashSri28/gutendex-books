import React, { useState } from 'react';
import axios from 'axios';


const useFetchBooks = ()=>{
    const API_URL = 'http://skunkworks.ignitesol.com:8000/books';
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchBooks = async (category, searchTerm='', fetchMore=false)=>{
        if(loading){
            return;
        }
        setLoading(true);
        console.log(searchTerm);
        const currentPage = fetchMore? page+1: 1;
        if(fetchMore){
            console.log("fetching more books");
            console.log(page);
        }
        try{
            const response = await axios.get(API_URL, {
                params: {
                    page: currentPage,
                    topic: category,
                    search: searchTerm,
                    mime_type: "image/jpeg"
                }
            })
            setPage(currentPage);
            const fetchedBooks = response.data.results;
            if(fetchMore){
                setBooks(prev=> [...prev, ...fetchedBooks]);
            }
            else{
                setBooks(fetchedBooks);
            }
            
            
        } catch(error){
            console.error(error)

        } finally{
            setLoading(false);
        }
    }
    

  return {books, fetchBooks}
}

export default useFetchBooks;
