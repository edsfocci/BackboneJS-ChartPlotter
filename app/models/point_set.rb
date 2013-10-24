class PointSet < ActiveRecord::Base
  attr_accessible :chart_id, :point_set_label
  validates :chart_id, :point_set_label, presence: true

  has_many :points

  belongs_to :chart
end
