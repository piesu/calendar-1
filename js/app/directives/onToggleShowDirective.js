/**
 * ownCloud - Calendar App
 *
 * @author Raghu Nayyar
 * @author Georg Ehrke
 * @author Bernhard Posselt
 * @copyright 2016 Raghu Nayyar <beingminimal@gmail.com>
 * @copyright 2016 Georg Ehrke <oc.list@georgehrke.com>
 * @copyright 2016 Bernhard Posselt <dev@bernhard-posselt.com>
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU AFFERO GENERAL PUBLIC LICENSE for more details.
 *
 * You should have received a copy of the GNU Affero General Public
 * License along with this library.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

app.directive('onToggleShow', function () {
	'use strict';
	return {
		restrict: 'A',
		scope: {
			'onToggleShow': '@'
		},
		link: function (scope, elem) {
			elem.click(function () {
				var target = $(scope.onToggleShow);
				target.toggle();
			});

			scope.$on('documentClicked', function (s, event) {
				var target = $(scope.onToggleShow);

				if (event.target !== elem[0]) {
					target.hide();
				}
			});
		}
	};
});
