/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.jsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema, schema_2, schema_3} from './sanity/schema'

export default defineConfig({
  basePath: '/studio',
  projectId: 'lspp38nx',
  dataset: 'sara_info',

  schema: {
    types: [...schema, ...schema_2, ...schema_3]
  }, 
  plugins: [
    structureTool(),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
