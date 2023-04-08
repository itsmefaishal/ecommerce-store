import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId : 'o0f3du3q',
    dataset : "production",
    apiVersion : '2023-04-07',
    useCdn : true ,
    token : process.env.NEXT_PUBLIC_SANITY_APIKEY
})

const builder = imageUrlBuilder(client);

export function urlFor(source : { asset: { _ref: string } }) {
    return builder.image(source);
}