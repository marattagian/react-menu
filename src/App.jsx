import { useState } from "react"
import Categories from "./components/categories"
import Menu from "./components/menu"
import items from "./data"

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const itemsFilter = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    setMenuItems(items.filter((item) => item.category === category))
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filter={itemsFilter} categories={categories} />
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App
