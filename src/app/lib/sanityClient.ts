import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion : '2023-05-27',
  dataset: 'production',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
})