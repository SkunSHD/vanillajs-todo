/*global app, $on */
(function () {
	'use strict';

	/**
	 * Sets up a brand new Todo list.
	 *
	 * @param {string} name The name of your new to do list.
	 */
	function Todo(name) {
		this.storage = new app.Store(name);
		this.model = new app.Model(this.storage);
		this.template = new app.Template();
		this.router = app.Router;
		this.view = new app.View(this.template, this.router);
		this.controller = new app.Controller(this.model, this.view);
	}

	var todo = new Todo('todos-vanillajs');

	function setView() {
		todo.controller.setView(document.location.hash);
		
		// Router initialisation
		if(todo.router.flag) {
			setRouter();
		}
	}
    
	function setRouter() {
	    todo.router.flag = false;

		// configuration
		todo.router.config({
		    mode: 'history',
		    root: 'vanillajs-todo'
		});
		
		todo.router
		.add(/details/, function() {
			console.log('/details');
		})
		.listen();
	}
    
	$on(window, 'load', setView);
	$on(window, 'hashchange', setView);
})();
