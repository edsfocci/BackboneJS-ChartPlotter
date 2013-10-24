class Point < ActiveRecord::Base
  attr_accessible :point_set_id, :x_coord, :y_coord
  validates :point_set_id, :x_coord, :y_coord, presence: true

  belongs_to :point_set
end
