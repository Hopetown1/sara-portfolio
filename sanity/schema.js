// Inside schemas/schema.js 
export const schema = [
  {
    name: 'sara_info',
    title: 'Sara Info', 
    type: 'document',
    fields: [
      {name: 'name', title: 'Name', type: 'string', readOnly: true, initialValue: 'Sara Barcons', isTitle: true},
      { name: 'text_1', title: 'Text 1', type: 'text'},
      { name: 'text_2_line1', title: 'Text 2 Line 1', type: 'string' },
      { name: 'text_2_line2', title: 'Text 2 Line 2', type: 'string' },
      
    ],
  },
]
// Inside schemas/schema.js 
export const schema_2 = [
  {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string', isTitle: true},
      { name: 'brand', title: 'Brand', type: 'string' },
      { name: 'date', title: 'Date', type: 'string' },
      { name: 'text_1', title: 'Text 1', type: 'text' },
      { name: 'text_2_line1', title: 'Text 2 Line 1', type: 'string' },
      { name: 'text_2_line2', title: 'Text 2 Line 2', type: 'string' },
      {
        name: 'images',
        title: 'Images',
        type: 'array', 
        of: [{
          type: 'object',
          fields: [
            { name: 'image', type: 'image', title: 'Image' },
            { 
              name: 'layout', 
              type: 'string', 
              title: 'Layout',
              options: {
                list: [
                  { title: 'Stacked', value: 'stacked' },
                  { title: 'Two per row', value: 'two per row' },
                ],
              },
            },
          ]
        }]
      },
    ]
  }
]

