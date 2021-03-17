import React from "react"

const Categories = ({ categories, filterCategories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            onClick={() => filterCategories(category)}
            key={index}
            className="filter-btn"
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
