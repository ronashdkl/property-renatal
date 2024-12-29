import { adminAuthenticated } from '@/access/adminAuthenticated'
import { anyone } from '@/access/anyone'
import { countryListOptions } from '@/utilities/countryList'
import { HeadingFeature } from '@payloadcms/richtext-lexical'
import {
  FixedToolbarFeature,
  HorizontalRuleFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { CollectionConfig } from 'payload'

export const Locations: CollectionConfig<'locations'> = {
  slug: 'locations',
  access: {
    create: adminAuthenticated,
    read: anyone,
    update: adminAuthenticated,
    delete: adminAuthenticated,
    admin: adminAuthenticated,
  },
  admin: {
    useAsTitle: 'city',
  },
  fields: [
    {
      name: 'city',
      type: 'text',
    },
    {
      name: 'state',
      type: 'text',
    },
    {
      name: 'country',
      type: 'select',
      options: countryListOptions,
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            HorizontalRuleFeature(),
          ]
        },
      }),
    },
  ],
}
