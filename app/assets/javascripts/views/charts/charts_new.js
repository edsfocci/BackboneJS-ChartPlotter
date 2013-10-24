ChartPlotter.Views.ChartsNew = Backbone.View.extend({
  events: {
    'submit form': 'submit'
  },

  template: JST['charts/new'],

  render: function () {
    this.$el.html(this.template);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var that = this;

    var formData = $(event.currentTarget).serializeJSON();

    var chart = new ChartPlotter.Models.Chart(formData.chart);

    chart.save(chart.attributes, {
      success: function () {
        that.model = chart;
        that.collection.add(chart);
        formData.point_set.chart_id = chart.escape('id');
        that.save_point_set(formData);
      }
    });
  },

  save_point_set: function (formData) {
    var that = this;

    var point_set = new ChartPlotter.Models.PointSet(formData.point_set);

    point_set.save(point_set.attributes, {
      success: function () {
        formData.point.point_set_id = point_set.escape('id');
        that.save_point(formData);
      }
    });
  },

  save_point: function (formData) {
    var that = this;

    var point = new ChartPlotter.Models.Point(formData.point);

    point.save(point.attributes, {
      success: function () {
        var id = that.model.escape('id');
        Backbone.history.navigate("#/charts/" + id);
      }
    });
  }
});