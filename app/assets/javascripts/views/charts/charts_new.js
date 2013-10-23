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
        that.charts.add(chart);
        formData.point_set.chart_id = chart.escape('id');
        that.save_point_set(formData);
      }
    });
  },

  save_point_set: function (formData) {
    var point_set = new ChartPlotter.Models.PointSet(formData.point_set);

    point_set.save(point_set.attributes, {
      success: function () {
        that.point_sets.add(point_set);
        formData.point.point_set_id = point_set.escape('id');
        that.save_point(formData);
      }
    });
  },

  save_point: function (formData) {
    var point = new ChartPlotter.Models.Points(formData.point);

    point.save(point.attributes, {
      success: function () {
        that.points.add(point);

        var id = formData.point_set.chart_id;
        Backbone.history.navigate("#/charts/" + id);
      }
    });
  }
});