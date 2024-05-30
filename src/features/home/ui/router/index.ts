/* eslint-disable perfectionist/sort-objects */
export const homeRouter: RouteDefinition = {
  path: '/',
  component: lazy(() => import('@/home/ui/pages/home'))
}
