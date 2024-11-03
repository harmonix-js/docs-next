export default defineNuxtRouteMiddleware(async (to) => {
  const docs = (await fetchContentNavigation()).find((item) => item._path === '/docs')

  if (to.path === '/docs') {
    return navigateTo('/docs/getting-started/introduction')
  }
  if (/^\/docs\/([a-zA-Z0-9_-]+)\/?$/.test(to.path)) {
    return navigateTo(docs?.children?.find((item) => item._path === to.path.replace(/\/$/, ''))?.children?.[0]?._path || '/docs')
  }
})
