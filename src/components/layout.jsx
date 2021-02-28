import React from "react"
import Header from "./header.jsx"
import Footer from "./footer.jsx"

export default ({ children }) => {
  return (
    <div>
      <Header />

      {children}

      <Footer />
    </div>
  )
}
