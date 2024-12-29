import type { AccessArgs } from 'payload'

import type { AdminUser } from '@/payload-types'

type isAuthenticated = (args: AccessArgs<AdminUser>) => boolean

export const adminAuthenticated: isAuthenticated = ({ req: { user } }) => {
  if (!user) {
    return false
  }
  if (user.collection != 'admin-users') {
    return false
  }
  return true
}
