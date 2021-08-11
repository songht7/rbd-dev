const loginRouter = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login'),
}

export default loginRouter