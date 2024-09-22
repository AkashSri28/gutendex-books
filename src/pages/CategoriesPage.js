import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './CategoriesPage.module.css';
import { FaArrowRight, FaBalanceScale, FaTheaterMasks, FaLandmark, FaLaugh, FaMountain, FaHistory } from 'react-icons/fa';
import { ImLab } from "react-icons/im";

function CategoriesPage() {
    const categories = [
        { name: "Fiction", icon: <ImLab /> },
        { name: "Philosophy", icon: <FaBalanceScale /> },
        { name: "Drama", icon: <FaTheaterMasks /> },
        { name: "History", icon: <FaHistory /> },
        { name: "Humour", icon: <FaLaugh /> },
        { name: "Adventure", icon: <FaMountain /> },
        { name: "Politics", icon: <FaLandmark /> }
    ];

    const navigate = useNavigate();

    const handleCategoryClick = (category)=>{
        navigate(`/books/${category.name}`)
    }
  return (
    <div className={styles.categoriesContainer}>
        <h1 className={styles.pageTitle}>Gutenberg Project</h1>
        <p className={styles.pageDescription}>A social cataloging website that allows you to freely seatch its database
            of books, annotations, and reviews.
        </p>
        <div className={styles.categoriesGrid}>
            {categories.map((category)=> 
                <button 
                    key={category.name} 
                    onClick={()=>handleCategoryClick(category)}
                    className={styles.categoryCard}
                >
                    <span>{category.icon} {category.name}</span>
                    <span><FaArrowRight /></span>
                </button>
            
            )}

        </div>
        
    </div>
  )
}

export default CategoriesPage