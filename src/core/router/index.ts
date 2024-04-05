/* eslint-disable perfectionist/sort-objects */
import type { RouteDefinition } from '@solidjs/router'
import { lazy } from 'solid-js'

export const routes: RouteDefinition = {
  path: '/',
  component: lazy(() => import('@/common/ui/layout/layout'))
}
