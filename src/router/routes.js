
const routes = [
  {
    path: '/Main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('pages/LoginPage.vue')
  },
  {
    path: '/Register',
    component: () => import('pages/RegisterPage.vue')
  },
  {
    path: '/Principal',
    component: () => import('pages/PrincipalServicio.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
