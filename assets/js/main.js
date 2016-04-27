

(function($) {
    var app = angular.module('app', ["ui.router"])
    app.config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise("/features")

      $stateProvider
        .state('features', {
            url: "/features",
            templateUrl: "partials/features.html"
        })
        .state('expandableMemory', {
            url: "/expandable-memory",
            templateUrl: "partials/expandable-memory.html"
        })
        .state('waterResistant', {
            url: "/water-resistant",
            templateUrl: "partials/water-resistant.html"
        })
    });


	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Nav.
			$('#nav')
				.append('<a href="#nav" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right'
				});

	});

})(jQuery);
