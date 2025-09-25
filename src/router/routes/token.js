const token = () => import('@/pages/token/index.vue')

const routes = [
	{
		path: '/Token-Management',
		name: 'token-management',
		meta: { requiresAuth: true, layout: 'blank', title: 'Header' },
		component: token,
	},
]

export default routes