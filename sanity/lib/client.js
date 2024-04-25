import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  projectId: 'lspp38nx', // you can find this in sanity.json
  dataset: 'sara_info', // or the name of your dataset
  apiVersion: '2021-03-25', // use a UTC date string
  useCdn: true, // `false` if you want to ensure fresh data
});