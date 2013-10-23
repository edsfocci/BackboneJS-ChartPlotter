ChartPlotter.Views.ChartsIndex = Backbone.View.extend({
  template: JST['charts/index'],

  render: function () {
    this.$el.html(this.template({
      charts: this.collection
    }));
    return this;
  }
});