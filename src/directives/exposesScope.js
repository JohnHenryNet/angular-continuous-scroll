(function () {
  'use strict';

  angular.module('fw.continuousScroll')

  /**
   * @member fw.continuousScroll.exposesScope
   *
   * @description
   * A directive for an element to expose it's scope variable
   * element[0].getScope() to access the scope with
   * debug info disabled.
   */
    .directive('exposesScope', function () {

      return {
        link: function link(scope, element, attrs) {
          element[0].getScope = function () {
          return scope;
        };
      }
    };
  });
})();
