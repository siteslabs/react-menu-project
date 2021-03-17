import React from "react"

const Menu = ({ menu }) => {
  return (
    <div className="section-center">
      {menu.map((m, index) => {
        const { title, price, img, desc } = m
        return (
          <article key={index} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4>{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
