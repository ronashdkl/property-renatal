export type AdminRoleTypes = 'admin' | 'superAdmin' | 'staff'

export const AdminRoles: Record<AdminRoleTypes, { label: string; value: AdminRoleTypes }> = {
  admin: {
    label: 'Admin',
    value: 'admin',
  },
  superAdmin: {
    label: 'Super Admin',
    value: 'superAdmin',
  },
  staff: {
    label: 'Staff',
    value: 'staff',
  },
}

export const AdminRolesOptions = Object.values(AdminRoles)
