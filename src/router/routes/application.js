const application = () => import('@/pages/application/index.vue')

const routes = [
	{
		path: '/Application-Management',
		name: 'application-management',
		meta: { requiresAuth: true, layout: 'blank', title: 'Header' },
		component: application,
	},
]

export default routes