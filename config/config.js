module.exports = {
  name: 'EPOCHTimeConverter',
  acronym: 'TIME',
  description: 'Converts EPOCH Time to Human Readable Date',
  customTypes: [
    {
      key: 'unixtime',
      regex: /\s\d{10}(?!\w)/
    }
  ]
};
