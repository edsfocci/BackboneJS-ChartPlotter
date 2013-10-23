window.ChartPlotter = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function($rootEl, chartsData) {
    var charts = new ChartPlotter.Collections.Charts(chartsData);

    new ChartPlotter.Routers.ChartsRouter($rootEl, charts);
    Backbone.history.start();
  }
};
