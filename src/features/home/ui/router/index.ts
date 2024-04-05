/* eslint-disable perfectionist/sort-objects */
import type { RouteDefinition } from '@solidjs/router'
import { lazy } from 'solid-js'

export const homeRouter: RouteDefinition = {
  path: '/',
  component: lazy(() => import('@/home/ui/pages/home'))
}
