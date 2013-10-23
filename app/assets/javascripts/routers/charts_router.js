ChartPlotter.Routers.ChartsRouter = Backbone.Router.extend({
  initialize: function ($rootEl, charts) {
    this.$rootEl = $rootEl;
    this.charts = charts;
  },

  routes: {
    '': 'root',
    'charts': 'index',
    'charts/new': 'new',
    'charts/:id': 'edit'
  },

  root: function () {
    Backbone.history.navigate('#/charts');
  },

  index: function () {
    var chartsIndex = new ChartPlotter.Views.ChartsIndex({
      collection: this.charts
    });
    this.$rootEl.html(chartsIndex.render().$el);
  },

  new: function () {
    var chartsNew = new ChartPlotter.Views.ChartsNew;
    this.$rootEl.html(chartsNew.render().$el);
  },

  edit: function (id) {
    var chartsEdit = new ChartPlotter.Views.ChartsEdit({
      chart: this.charts.get(id)
    });
    this.$rootEl.html(chartsEdit.render().$el);
  }
});