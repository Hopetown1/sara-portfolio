// import { init } from "next/dist/compiled/webpack/webpack"

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
      {name: 'phone', title: 'Phone', type: 'string', initialValue: '(+34) 622318871'},
      {name: 'email', title: 'Email', type: 'string', initialValue: 'sarabarcons@gmail.com'},
      {name: 'instagram', title: 'Instagram', type: 'string', initialValue: 'https://www.instagram.com/sarabarcons/'},
      {name: 'linkedin', title: 'LinkedIn', type: 'string', initialValue: 'https://www.linkedin.com/in/sara-barcons-810239223/'}
    ],
  },
]

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
                  { title: 'Three per row', value: 'three per row' },
                ],
              },
            },
          ]
        }]
      },
    ]
  }
]

//another schema for editing colours, fonts and font sizes
export const schema_3 = [
  {
    name: 'appearance',
    title: 'Appearance',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string', isTitle: true, initialValue: 'Appearance' , readOnly: true},
      { name: 'font', title: 'Font', type: 'string' },
      { name: 'font_size', title: 'Font Size in Pixels', type: 'number' },
      { name: 'highlight_color', title: 'Highlight Color', type: 'string' },
      {name: 'background_color', title: 'Background Color', type: 'string'}
    ],
  },
]