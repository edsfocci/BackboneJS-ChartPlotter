class Point < ActiveRecord::Base
  attr_accessible :point_set_id, :x_coord, :y_coord

  belongs_to :point_set
end
