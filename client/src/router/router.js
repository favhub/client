import Vue from "vue";
import Router from "vue-router";
import store from "@/store/store";

import Homepage from "@/components/pages/homepage";
import Welcome from "@/components/pages/welcome";
import Login from "@/components/pages/login";
import Register from "@/components/pages/register";
import Settings from "@/components/pages/settings";

Vue.use(Router);

const router = new Router({
	routes: [
		{
			path: "/",
			name: "Homepage",
			component: Homepage
		},
		{
			path: "/welcome",
			name: "Welcome",
			component: Welcome
		},
		{
			path: "/register",
			name: "Register",
			component: Register
		},
		{
			path: "/login",
			name: "Login",
			component: Login
		},
		{
			path: "/logout",
			name: "Logout",
			beforeEnter(to, from, next) {
				store.commit("auth/logout");
				next("/welcome");
			}
		},
		{
			path: "/settings",
			name: "Settings",
			component: Settings
		}
	]
});

router.beforeEach((to, from, next) => {
	let authenticated = store.state.auth.authenticated;

	if (authenticated) {
		if (to.name === "Login" || to.name === "Register") {
			next(!from.name ? "/" : false);
		} else {
			next();
		}
	} else {
		let guestSession = to.name === "Login" || to.name === "Register" || to.name === "Welcome";
		next(guestSession ? undefined : "/welcome");
	}
});

export default router;
