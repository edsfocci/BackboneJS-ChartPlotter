ChartPlotter.Models.Point = Backbone.Model.extend({
  urlRoot: '/points',

  toString: function () {
    return '{"x":"' + this.escape('x_coord') +
                                        '","y":' + this.escape('y_coord') + '}';
  }
});