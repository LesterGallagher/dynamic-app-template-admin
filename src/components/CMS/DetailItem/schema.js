export default {
  definitions: {},
  type: 'object',
  title: 'Page',
  required: [
    'frontmatter'
  ],
  properties: {
    frontmatter: {
      type: 'object',
      title: 'Frontmatter',
      required: [
        'title',
        'layout',
        'date',
        'author',
        'weight'
      ],
      properties: {
        title: {
          type: 'string',
          title: 'Title',
          default: '',
        },
        layout: {
          title: 'Layout',
          enum: ["page", "home"],
          readOnly: true
        },
        date: {
          type: 'string',
          title: 'Date',
          default: '',
        },
        author: {
          type: 'string',
          title: 'Author',
          default: '',
        },
        weight: {
          type: 'integer',
          title: 'Weight',
          default: 90,
          minimum: 0,
          maximum: 100
        }
      }
    }
  }
}