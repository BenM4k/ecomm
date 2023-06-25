import { createClient } from "@sanity/client";
import createImageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: process.env.REACT_APP_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-05-03',
    useCdn: true,
    token: process.env.REACT_APP_API_TOKEN,
});

const builder = createImageUrlBuilder(client);
export function urlFor(source) {
    return builder.image(source)
}