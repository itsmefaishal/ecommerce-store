import React from 'react'
import Link from 'next/link';
import { urlFor } from '../../../lib/client';

const Banner = ({bannerProp}) => {
  return (
    <div>
      <p className="smallText">{bannerProp.smallText}</p>
      <h3>{bannerProp.midText}</h3>
      {/* <img src={urlFor(bannerProp.image)} alt="headphones" /> */}
      <img src={urlFor(bannerProp.image)} alt="headphone"  />
      <div>
        <Link href="/" >
        <button>Shop now</button>
        </Link>
      </div>
      <div className="desc">
        <h5>Description</h5>
        <p>description</p>
      </div>
    </div>
  )
}

export default Banner;
