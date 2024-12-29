import { adminAuthenticated } from '@/access/adminAuthenticated'
import { anyone } from '@/access/anyone'
import { CollectionConfig } from 'payload'

const Beds: CollectionConfig<'beds'> = {
  slug: 'beds',
  access: {
    create: adminAuthenticated,
    read: anyone,
    update: adminAuthenticated,
    delete: adminAuthenticated,
    admin: adminAuthenticated,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'summary',
      type: 'textarea',
    },
    {
      name: 'capacity',
      type: 'number',
      defaultValue: 1,
    },
    { name: 'babyFriendly', type: 'checkbox' },
    {
      name: 'toodlerFriendly',
      type: 'checkbox',
    },
  ],
}

export default Beds
