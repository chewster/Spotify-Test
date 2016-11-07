/*global angular */

/**
 * Directive that places focus on the element it is applied to when the
 * expression it binds to evaluates to true
 */

function DefaultCtrl($scope) {
	$scope.names = ["john", "bill", "charlie", "robert", "alban", "oscar", "marie", "celine", "brad", "drew", "rebecca", "michel", "francis", "jean", "paul", "pierre", "nicolas", "alfred", "gerard", "louis", "albert", "edouard", "benoit", "guillaume", "nicolas", "joseph"];
}
angular.module('playlistmvc')
	.directive('songFocus', function songFocus($timeout) {
		'use strict';

		return function (scope, elem, attrs) {
			elem.autocomplete({
				source: scope[iAttrs.uiItems],
				select: function() {
					$timeout(function() {
						iElement.trigger('input');
					}, 0);
				}
			});
			/*
			scope.$watch(attrs.todoFocus, function (newVal) {
				if (newVal) {
					$timeout(function () {
						elem[0].focus();
					}, 0, false);
				}
			});*/
		};
	});
