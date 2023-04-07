import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../../../lib/client';

const Banner = ({bannerProp}) => {
  return (
    <div>
      <p className="smallText">{bannerProp.smallText}</p>
      <h3>Mid Text</h3>
      <Image src={bannerProp.image} alt='headphones' />
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
