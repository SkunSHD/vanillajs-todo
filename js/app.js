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
	}
    
    function setRouter() {
        
        // configuration
        todo.router.config({
            mode: 'history',
            root: 'https://skunshd.github.io/vanillajs-todo/'
        });
        
        // returning the user to the initial state
        todo.router.navigate();
        
        // adding routes
        Router
        .add(/about/, function() {
            console.log('about');
        })
        .add(/products\/(.*)\/edit\/(.*)/, function() {
            console.log('products', arguments);
        })
        .add(function() {
            console.log('default');
        })
        .check('/products/12/edit/22').listen();

        // forwarding
        Router.navigate('/about');       
        
    }
    
	$on(window, 'load', setView, setRouter);
	$on(window, 'hashchange', setView);
})();
