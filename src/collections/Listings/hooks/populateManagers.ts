import type { CollectionAfterReadHook } from 'payload'
import { AdminUser } from 'src/payload-types'

// The `admin-user` collection has access control locked so that users are not publicly accessible
// This means that we need to populate the authors manually here to protect user privacy
// GraphQL will not return mutated user data that differs from the underlying schema
// So we use an alternative `populatedManagers` field to populate the user data, hidden from the admin UI
export const populateManagers: CollectionAfterReadHook = async ({ doc, req, req: { payload } }) => {
  if (doc?.managers) {
    const managerDocs: AdminUser[] = []

    for (const manager of doc.managers) {
      const managerDoc = await payload.findByID({
        id: typeof manager === 'object' ? manager?.id : manager,
        collection: 'admin-users',
        depth: 0,
        req,
      })

      if (managerDocs) {
        managerDocs.push(managerDoc)
      }
    }

    doc.populatedManagers = managerDocs.map((managerDoc) => ({
      id: managerDoc.id,
      name: managerDoc.name,
    }))
  }

  return doc
}
