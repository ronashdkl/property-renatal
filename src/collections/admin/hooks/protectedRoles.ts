// ensure there is always a `user` role

import { checkRole } from '@/access/checkRole'
import { FieldHook, User } from 'payload'

// do not let non-admins change roles
export const protectRoles: FieldHook<{ id: string } & User> = ({ data, req }) => {
  const isAdmin =
    checkRole(['admin', 'superAdmin'], req.user!) || data?.email === 'demo@payloadcms.com' // for the seed script

  if (!isAdmin) {
    return ['user']
  }

  const userRoles = new Set(data?.roles || [])
  userRoles.add('user')
  return [...userRoles]
}
