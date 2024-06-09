export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/docs') {
    return navigateTo('/docs/getting-started')
  }
})
