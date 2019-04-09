module.exports = {
  name: 'EPOCH Time Converter',
  acronym: 'TIME',
  description: 'Converts EPOCH Time to Human Readable Date',
  customTypes: [
    {
      key: 'unixtime',
      regex: /\b\d{10}(?!\w)/
    }
  ],
  block: {
    component: {
      file: './components/epoch-block.js'
    },
    template: {
      file: './templates/epoch-block.hbs'
    }
  },
  summary: {
    component: {
      file: './components/epoch-summary.js'
    },
    template: {
      file: './templates/epoch-summary.hbs'
    }
  },
  options: [
    {
      key: 'showSummaryInLocalTimezone',
      name: 'Show Time in Your Local Timezone',
      description:
        'If checked, the integration will display the time in your local timezone as a summary tag.  The default is to display the time in UTC',
      default: false,
      type: 'boolean',
      userCanEdit: true,
      adminOnly: false
    }
  ]
};
