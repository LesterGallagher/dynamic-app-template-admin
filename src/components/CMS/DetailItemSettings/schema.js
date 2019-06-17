export default {
  definitions: {},
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'http://example.com/root.json',
  type: 'object',
  title: 'Instellingen',
  required: [
    'description',
    'primaryThemeColor',
    'secondaryThemeColor',
    'title',
    'authentication',
    'introductionPage',
    'introductionPageColor',
    'authenticationMethods',
    'language',
  ],
  properties: {
    description: {
      $id: '#/properties/description',
      type: 'string',
      title: 'App Omschrijving',
      'default': 'Een mooie omschrijving van mijn app.',
      examples: [
        'Dit is mijn nieuwe app'
      ],
      pattern: '^(.*)$'
    },
    logoStorageRef: {
      $id: '#/properties/logoStorageRef',
      type: 'string',
      title: 'Jouw logo',
      'default': 'data:image/png;base64,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',
    },
    primaryThemeColor: {
      $id: '#/properties/primaryThemeColor',
      type: 'string',
      title: 'Primaire Thema Kleur',
      'default': '#ec6e08',
      examples: [
        '#ec6e08'
      ],
      pattern: '^(.*)$'
    },
    secondaryThemeColor: {
      $id: '#/properties/secondaryThemeColor',
      type: 'string',
      title: 'Tweede Thema Kleur',
      'default': '#ec6e08',
      examples: [
        '#ec6e08'
      ],
      pattern: '^(.*)$'
    },
    title: {
      $id: '#/properties/title',
      type: 'string',
      title: 'Titel',
      'default': 'Mijn nieuwe app!',
      examples: [
        'Mijn nieuwe app!'
      ],
      pattern: '^(.*)$'
    },
    authentication: {
      $id: '#/properties/authentication',
      type: 'boolean',
      title: 'Authentication?',
      'default': false,
      examples: [
        false
      ]
    },
    introductionPage: {
      $id: '#/properties/introductionPage',
      type: 'boolean',
      title: 'Introductie pagina?',
      'default': false,
      examples: [
        false
      ]
    },
    introductionPageColor: {
      $id: '#/properties/introductionPageColor',
      type: 'string',
      title: 'The Introductionpagecolor',
      'default': '#ffff00',
      examples: [
        '#ffff00'
      ],
      pattern: '^(.*)$'
    },
    "authenticationMethods": {
      "$id": "#/properties/authenticationMethods",
      "type": "object",
      "title": "The Authenticationmethods",
      "required": [
        "google",
        "facebook",
        "twitter",
        "email"
      ],
      "properties": {
        "google": {
          "$id": "#/properties/authenticationMethods/properties/google",
          "type": "boolean",
          "title": "Google",
          "default": true,
          "examples": [
            true
          ]
        },
        "facebook": {
          "$id": "#/properties/authenticationMethods/properties/facebook",
          "type": "boolean",
          "title": "Facebook",
          "default": false,
          "examples": [
            true
          ]
        },
        "twitter": {
          "$id": "#/properties/authenticationMethods/properties/twitter",
          "type": "boolean",
          "title": "Twitter",
          "default": false,
          "examples": [
            true
          ]
        },
        "email": {
          "$id": "#/properties/authenticationMethods/properties/email",
          "type": "boolean",
          "title": "Email",
          "default": true,
          "examples": [
            true
          ]
        }
      }
    },
    language: {
      $id: '#/properties/language',
      type: 'string',
      title: 'Taal',
      'default': 'nl',
      examples: [
        'nl'
      ],
      pattern: '^(.*)$'
    },
    keywords: {
      $id: '#/properties/keywords',
      type: 'array',
      title: 'Keywords',
      default: [],
      items: {
        $id: '#/properties/keywords/items',
        type: 'string',
        title: 'The Items',
        'default': '',
        examples: [
          'keyword 1',
          'keyword 2',
          'keyword 3'
        ],
        pattern: '^(.*)$'
      }
    },
    author: {
      $id: '#/properties/author',
      type: 'string',
      title: 'Auteur',
      'default': 'Sem Postma',
      examples: [
        'Sem Postma'
      ],
      pattern: '^(.*)$'
    }
  }
}