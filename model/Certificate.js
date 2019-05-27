module.exports = {
  name: 'Certificate',
  fields: [
    {
      name: 'Institutename',
      type: 'String',
      length: 256,
      not_null: true
    },

  {
      name: 'IssuerName',
      type: 'String',
      length: 256,
      not_null: true
    },
    {
        name: 'CandidateName',
        type: 'String',
        length: 256,
        not_null: true
      },
    {
      name: 'owner',
      type: 'String',
      length: 50,
      not_null: true,
    }
  ]
}
