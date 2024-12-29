import { Field } from 'payload'

export const roomFields: Field[] = [
  {
    name: 'roomType',
    type: 'select',
    admin: {
      width: '1/2',
    },
    options: [
      {
        label: 'Kitchen',
        value: 'kitchen',
      },
      {
        label: 'Bathroom',
        value: 'bathroom',
      },
      {
        label: 'Bedroom',
        value: 'bedroom',
      },
      {
        label: 'Living Room',
        value: 'livingRoom',
      },
      {
        label: 'Other Room',
        value: 'otherRoom',
      },
    ],
    required: true,
  },
  {
    name: 'roomName',
    type: 'text',
    admin: {
      width: '1/2',
    },
  },
  {
    name: 'image',
    type: 'upload',
    hasMany: true,
    relationTo: 'media',
  },
  {
    name: 'beds',
    type: 'relationship',
    relationTo: 'beds',
    hasMany: true,
    admin: {
      condition: (_, siblingData) =>
        ['bedroom', 'livingRoom', 'otherRoom'].includes(siblingData.roomType),
    },
  },
]
