(function (angular) {
	'use strict';

	angular.module('ichnaea', [])
		.provider('$ichnaea', function () {
			var host = "http://localhost:3000",
				socket = null,
				service = {},
				startTsCache = {};

			service.connect = function () {
				try {
					if (!socket) {
						socket = io.connect(host);
					}
				} catch (error) {
					console.warn(error)
				}
			};

			service.disconnect = function () {
				try {
					socket.disconnect();
					socket = null;
				} catch (error) {
					console.warn(error)
				}
			};

			service.trackOn = function (event) {
				startTsCache[event] = new Date().getTime();
			};

			service.trackOff = function (event) {
				var interval = new Date().getTime() - startTsCache[event];
				if (socket) {
					socket.emit('log event', {
						event: event,
						interval: interval
					});
				}
			};

			return {
				$get: function () {
					return service;
				}
			};
		});
})(angular);