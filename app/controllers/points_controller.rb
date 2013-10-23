class PointsController < ApplicationController
  def create
    point = Point.new(params[:point])

    if point.save
      render json: point
    else
      render json: point.errors, :status => 422
    end
  end

  def update
    point = Point.find(params[:id])
    point.update_attributes(params[:point])

    if point.save
      render json: point
    else
      render json: point.errors, :status => 422
    end
  end
end
