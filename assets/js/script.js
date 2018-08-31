var myApp = angular.module('MarkHumans', ['ui.router']);

myApp.config(["$stateProvider","$urlRouterProvider", function($stateProvider, $urlRouterProvider){
	var NGOhome = {
		name: 'NGOhome',
		url: '/',
		templateUrl: 'assets/views/ngo-home.html'
	}

	var NGOabout = {
		name: 'NGOabout',
		url: '/about-the-ngo',
		templateUrl: 'assets/views/ngo-about.html'
	}

	var NGOevents = {
		name: 'NGOevents',
		url: '/events',
		templateUrl: 'assets/views/ngo-events.html'
	}

	var NGOprojects = {
		name: 'NGOprojects',
		url: '/projects',
		templateUrl: 'assets/views/ngo-projects.html'
	}

	var NGOteam = {
		name: 'NGOteam',
		url: '/team',
		templateUrl: 'assets/views/ngo-team.html'
	}

	var NGOjoin = {
		name: 'NGOjoin',
		url: '/join',
		templateUrl: 'assets/views/ngo-join.html'
	}

	var NGOdonate = {
		name: 'NGOdonate',
		url: '/donate',
		templateUrl: 'assets/views/ngo-donate.html'
	}

	var NGOcontact = {
		name: 'NGOcontact',
		url: '/contact',
		templateUrl: 'assets/views/ngo-contact.html'
	}

	$stateProvider.state(NGOhome)
	$stateProvider.state(NGOabout)
	$stateProvider.state(NGOevents)
	$stateProvider.state(NGOprojects)
	$stateProvider.state(NGOteam)
	$stateProvider.state(NGOjoin)
	$stateProvider.state(NGOcontact)
	$stateProvider.state(NGOdonate)

	$urlRouterProvider.otherwise('/')
}])