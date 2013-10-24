ChartPlotter.Views.ChartsEdit = Backbone.View.extend({
  events: {
    'submit form': 'submit'
  },

  template: JST['charts/edit'],

  render: function () {
    var that = this;

    $.ajax({
      url: '/charts.json',
      type: 'GET',
      data: { 'id': this.model.escape('id') },
      success: function (combinedData) {
        var pointSetsData = combinedData['point_sets'];
        var pointsData = combinedData['points'];

        var point_set = new ChartPlotter.Models.PointSet(pointSetsData);
        var point = new ChartPlotter.Models.Point(pointsData);
        console.log(point);
        console.log(point.toString());

        that.$el.html(that.template({
          chart: that.model,
          point_set: point_set,
          point: point
        }));
      }
    });

    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var that = this;

    var formData = $(event.currentTarget).serializeJSON();

    this.model.set(formData.chart);

    this.model.save(this.model.attributes, {
      success: function () {
        that.save_point_set(formData);
      }
    });
  },

  save_point_set: function (formData) {
    var that = this;

    var point_set = new ChartPlotter.Models.PointSet(formData.point_set);

    point_set.save(point_set.attributes, {
      success: function () {
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
        Backbone.history.fragment = null;
        Backbone.history.navigate("#/charts/" + id, true);
      }
    });
  }
});