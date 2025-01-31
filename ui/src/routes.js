import Login from './containers/Login.svelte';
import Signup from './containers/Signup.svelte';
import ForgetPassword from './containers/ForgetPassword.svelte';
import Dashboard from './containers/Dashboard.svelte';
import Settings from './containers/Settings.svelte';
import HtmlHints from './containers/HtmlHints.svelte';
import BuildDetails from './containers/BuildDetails.svelte';
import Public from './containers/Public.svelte';
import PublicBuilds from './containers/PublicBuilds.svelte';
import HowItWorks from './containers/HowItWorks.svelte';
import Rules from './containers/Rules.svelte';
import LighthouseReport from './containers/LighthouseReport.svelte';
import ArtilleryReport from './containers/ArtilleryReport.svelte';
import AppLayout from './containers/Layout.svelte';
import { isLoggedIn } from './stores.js';

let loggedIn = false;
isLoggedIn.subscribe((x) => (loggedIn = x));

const routes = [
	{
		name: '/',
		component: Public,
		layout: AppLayout,
	},
	{
		name: '/login',
		component: Login,
	},
	{
		name: '/explore',
		component: PublicBuilds,
		layout: AppLayout
	},
	{
		name: '/signup',
		component: Signup,
	},
	{
		name: '/forgetPassword',
		component: ForgetPassword,
	},
	{
		name: '/howitworks',
		component: HowItWorks,
		layout: AppLayout
	},
	{
		name: '/rules',
		component: Rules,
		layout: AppLayout
	},
	{
		name: '/build/:id',
		component: BuildDetails,
		layout: AppLayout
	},
	{
		name: '/lighthouse/:id',
		component: LighthouseReport,
		layout: AppLayout
	},
	{
		name: '/artillery/:id',
		component: ArtilleryReport,
		layout: AppLayout
	},
	{
		name: '/htmlhint/:id',
		component: HtmlHints,
		layout: AppLayout
	},
	{
		name: 'home',
		component: AppLayout,
		onlyIf: {
			guard: () => {
				console.log('checking if user is logged in', loggedIn);
				return loggedIn;
			},
			redirect: '/login',
		},
		nestedRoutes: [
			{ name: 'index', component: Dashboard },
			{ name: 'settings', component: Settings },
		],
	},
];

export { routes };
