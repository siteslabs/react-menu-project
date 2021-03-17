import React, { useState } from "react"
import Menu from "./Menu"
import Categories from "./Categories"
import items from "./data"

const allCategories = [
  "all",
  ...new Set(
    items.map((item) => {
      return item.category
    })
  ),
]

function App() {
  const [menu, setMenu] = useState(items),
    [categories, setCategories] = useState(allCategories),
    filterCategories = (category) => {
      let newCategories = items.filter((item) => item.category === category)
      if (category === "all") {
        newCategories = items
      } else {
      }
      setMenu(newCategories)
    }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          filterCategories={filterCategories}
          categories={categories}
        />
        <Menu menu={menu} />
      </section>
    </main>
  )
}

export default App
