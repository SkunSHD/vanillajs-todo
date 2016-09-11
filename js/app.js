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
		this.router = app.Router;
		this.controller = new app.Controller(this.model, this.view, this.router);
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
		
		
		
		// Test code below
		// returning the user to the initial state
		// todo.router.navigate(/about);
		
		// adding routes
		// todo.router
		// .add(/about/, function() {
		//     console.log('about');
		// })
		// .add(/products\/(.*)\/edit\/(.*)/, function() {
		//     console.log('products', arguments);
		// })
		// .add(function() {
		//     console.log('default');
		// })
		// .check('/products/12/edit/22').listen()
		// .listen();
		
		// forwarding
		// todo.router.navigate('/about');    
	        
	}
    
	$on(window, 'load', setView);
	$on(window, 'hashchange', setView);
})();
