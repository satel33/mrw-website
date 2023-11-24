// lib/sanity.server.js
import { createClient } from 'next-sanity'
import { config } from './config'

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token:
    'skvHlfy9Y7TPuxXtBEgsLm5JHoKma8B9DCLlFUdTIQBzmJ4vVPbT8tIxHXjXrBNUAzy7JgJ4slHeFXsJW5eIcWN9X6LvU9x3rYFP2QRu1s7Tzbl4fOua4Fd7HJqFSipe7mZ9IAiqQo6EF5ox30uYpbRZ7RGWWt92dCZ56yZHYlMAnQxVX0ih', // SANITY_TOKEN
})

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient
