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
		this.view = new app.View(this.template);
		this.controller = new app.Controller(this.model, this.view);
        
		this.router = app.Router;
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
		
		// returning the user to the initial state
		todo.router.navigate();
		
		// adding routes
		todo.router
		.add(/about/, function() {
		    console.log('about');
		})
		.add(/products\/(.*)\/edit\/(.*)/, function() {
		    console.log('products', arguments);
		})
		.add(function() {
		    console.log('default');
		})
		.listen();
		
		// Test methods below
		// .check('/products/12/edit/22').listen();
		
		// forwarding
		// todo.router.navigate('/about');    
	        
	}
    
	$on(window, 'load', setView);
	$on(window, 'hashchange', setView);
})();
