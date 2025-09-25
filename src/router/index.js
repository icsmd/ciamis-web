import { createRouter, createWebHistory } from 'vue-router'

import core from '@/router/routes/core'

let routes = []

routes = routes.concat(
	core,
);

const router = createRouter({
	history: createWebHistory(import.meta.BASE_URL),
	routes: routes,
})

// Set the document title and handle authentication checks before each route navigation
router.beforeEach((to, from, next) => {
	document.title = `${import.meta.env.CIAMIS_APP_NAME || 'Vue Template'} ${
		to.meta.title ? '| ' + to.meta.title : ''
	}`

	// if (to.meta.requiresAuth && !localStorage.getItem('token')) {
	// 	next({ name: 'login' })
	// } else {
	// 	next()
	// }

	next()
})

export default router
