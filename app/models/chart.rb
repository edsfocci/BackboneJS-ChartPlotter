class Chart < ActiveRecord::Base
  attr_accessible :user_id, :title, :x_label, :y_label
  validates :user_id, :title, presence: true

  has_many :point_sets

  belongs_to :user
end
