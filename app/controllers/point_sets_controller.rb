class PointSetsController < ApplicationController
  def create
    point_set = PointSet.new(params[:point_set])

    if point_set.save
      render json: point_set
    else
      render json: point_set.errors, :status => 422
    end
  end

  def update
    point_set = PointSet.find(params[:id])
    point_set.update_attributes(params[:point_set])

    if point_set.save
      render json: point_set
    else
      render json: point_set.errors, :status => 422
    end
  end
end
