

export default function Home() {
  return (
    <>
      <div className="hero-banner">
        Hero Banner
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
