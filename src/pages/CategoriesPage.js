import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './CategoriesPage.module.css';
import { FaArrowRight, FaBalanceScale, FaTheaterMasks, FaLandmark, FaLaugh, FaMountain, FaHistory } from 'react-icons/fa';
import { ImLab } from "react-icons/im";

function CategoriesPage() {
    const categories = [
        { name: "Fiction", icon: <ImLab /> },
        { name: "Drama", icon: <FaTheaterMasks /> },
        { name: "Humour", icon: <FaLaugh /> },
        { name: "Politics", icon: <FaLandmark /> },
        { name: "Philosophy", icon: <FaBalanceScale /> },
        { name: "History", icon: <FaHistory /> },
        { name: "Adventure", icon: <FaMountain /> }
        
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
                    <span className={styles.categoryLabel}>{category.icon} {category.name.toUpperCase()}</span>
                    <span><FaArrowRight className={styles.arrowIcon} /></span>
                </button>
            
            )}

        </div>
        
    </div>
  )
}

export default CategoriesPage