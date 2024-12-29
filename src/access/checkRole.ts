import { AdminRoleTypes } from '@/collections/admin/roles'
import { User } from 'payload'

export const checkRole = (
  allRoles: AdminRoleTypes[] = [],
  user: User | undefined = undefined,
): boolean => {
  if (user) {
    if (
      allRoles.some((role) => {
        return user?.roles?.some((individualRole) => {
          return individualRole === role
        })
      })
    ) {
      return true
    }
  }

  return false
}
