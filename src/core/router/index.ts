/* eslint-disable perfectionist/sort-objects */
import { homeRouter } from '@/home/ui/router'
import { storeRouter } from '@/store/ui/router'

export const routes: RouteDefinition = {
  path: '/',
  component: lazy(() => import('@/common/ui/layout/layout')),
  children: [homeRouter, storeRouter]
}
