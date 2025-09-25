import { createRouter, createWebHistory } from 'vue-router'

import core from '@/router/routes/core'
import account from '@/router/routes/account'
import application from '@/router/routes/application'
import token from '@/router/routes/token'

let routes = []

routes = routes.concat(
	core,
	account,
	application,
	token,
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
