import Banner from "./components/Banner"
import Cart from "./components/Cart"
import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import FootBanner from "./components/FootBanner"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <div className="hero-banner">
        <Banner />
      </div>
      <div className="product-heading">
        <h2>Best selling porducts</h2>
        <p>Speakers of all ranges and design</p>
      </div>
      <div className="products">
        {['Headphone1', 'Headphone2'].map((p) => p)}
      </div>
    </>
  )
}
