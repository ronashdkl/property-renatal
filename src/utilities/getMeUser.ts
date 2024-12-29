import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { getClientSideURL } from './getURL'
import { User } from 'payload'

export const getMeUser = async <T extends User>(args?: {
  collection?: string
  nullUserRedirect?: string
  validUserRedirect?: string
}): Promise<{
  token: string
  user: T
}> => {
  const { nullUserRedirect, validUserRedirect, collection } = args || {}
  const cookieStore = await cookies()
  const token = cookieStore.get('payload-token')?.value

  const meUserReq = await fetch(`${getClientSideURL()}/api/${collection || 'users'}/me`, {
    headers: {
      Authorization: `JWT ${token}`,
    },
  })

  const {
    user,
  }: {
    user: T
  } = await meUserReq.json()

  if (validUserRedirect && meUserReq.ok && user) {
    redirect(validUserRedirect)
  }

  if (nullUserRedirect && (!meUserReq.ok || !user)) {
    redirect(nullUserRedirect)
  }

  // Token will exist here because if it doesn't the user will be redirected
  return {
    token: token!,
    user,
  }
}
