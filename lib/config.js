export const config = {
  dataset: 'production', // process.env.NEXT_PUBLIC_SANITY_DATASET
  projectId: 'oz8hb3li', // process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2021-03-25',
  useCdn: process.env.NODE_ENV === 'production',
}
