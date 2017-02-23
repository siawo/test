
(function (env, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = env.document ?
            factory(env) : factory;
    } else {
        env.FusionCharts = factory(env, true);
    }
}(typeof window !== 'undefined' ? window : this, function (_window, windowExists) {

	var FusionCharts = function () {

	};

	FusionCharts.prototype = {
		chart: function () {},
		setData: function () {},
		register: function () {},
		getData: function () {}
	};

	return FusionCharts;
}));
