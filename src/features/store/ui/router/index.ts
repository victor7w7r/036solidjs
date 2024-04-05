/* eslint-disable perfectionist/sort-objects */
import type { RouteDefinition } from '@solidjs/router'
import { lazy } from 'solid-js'

export const storeRouter: RouteDefinition = {
  path: '/store',
  component: lazy(() => import('@/store/ui/pages/store'))
}
