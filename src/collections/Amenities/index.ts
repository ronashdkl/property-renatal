import { adminAuthenticated } from '@/access/adminAuthenticated'
import { CollectionConfig } from 'payload'

export const Amenities: CollectionConfig<'amenities'> = {
  slug: 'amenities',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: adminAuthenticated,
    update: adminAuthenticated,
    delete: adminAuthenticated,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Essentials',
          value: 'essentials',
        },
        {
          label: 'Features',
          value: 'features',
        },
        {
          label: 'Location',
          value: 'location',
        },
        {
          label: 'Safety',
          value: 'safety',
        },
      ],
    },
    {
      name: 'icon',
      type: 'textarea',
      admin: {
        description: 'Icon identifier (e.g., "wifi", "pool", "parking")',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Brief description of the amenity',
      },
    },
  ],
}

export default Amenities
