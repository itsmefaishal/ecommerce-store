import Banner from "./components/Banner"
import Cart from "./components/Cart"
import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import FootBanner from "./components/FootBanner"
import Footer from "./components/Footer"
import { client } from "../../lib/client"

export default function Home( {products , bannerData} ) {
  return (
    <>
      <div className="hero-banner">
        <Banner bannerProp={bannerData.length && bannerData[0]} />
      </div>
      <div className="product-heading">
        <h2>Best selling porducts</h2>
        <p>Speakers of all ranges and design</p>
      </div>
      <div className="products">
        {products?.map((p) => p.name)}
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props : { products , bannerData }
  }
}