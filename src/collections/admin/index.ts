import type { CollectionConfig } from 'payload'

import { adminAuthenticated } from '../../access/adminAuthenticated'
import { AdminRolesOptions } from './roles'
export const AdminUsers: CollectionConfig = {
  slug: 'admin-users',
  access: {
    admin: adminAuthenticated,
    create: adminAuthenticated,
    delete: adminAuthenticated,
    read: adminAuthenticated,
    update: adminAuthenticated,
  },
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      saveToJWT: true,
      //   hooks: {
      //     beforeChange: [protectRoles],
      //   },
      options: AdminRolesOptions,
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      access: {
        create: () => false,
      },
      //   hooks: {
      //     beforeChange: [protectRoles],
      //   },
    },
  ],
  timestamps: true,
}
