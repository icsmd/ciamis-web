const account = () => import('@/pages/account/index.vue')

const routes = [
	{
		path: '/Account-Management',
		name: 'account-management',
		meta: { requiresAuth: true, layout: 'header', title: 'CIAMIS' },
		component: account,
	},
]

export default routes