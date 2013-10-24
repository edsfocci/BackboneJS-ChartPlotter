class ChartsController < ApplicationController
  before_filter :authenticate_user!

  def index
    respond_to do |format|
      format.html { render :index }
      format.json {
        chart = Chart.find(params[:id])

        @point_sets = chart.point_sets.includes(:points)
        # @points = @point_sets.map { |point_set| point_set.points }
        @points = @point_sets.first.points

        render :json => { point_sets: @point_sets.first, points: @points.first }
      }
    end
  end

  def create
    chart = Chart.new(params[:chart])
    chart.user_id = current_user.id

    if chart.save
      render json: chart
    else
      render json: chart.errors, :status => 422
    end
  end

  def update
    chart = Chart.find(params[:id])
    chart.update_attributes(params[:chart])

    if chart.save
      render json: chart
    else
      render json: chart.errors, :status => 422
    end
  end
end

#     charts GET    /charts(.:format)              charts#index
#            POST   /charts(.:format)              charts#create
#  new_chart GET    /charts/new(.:format)          charts#new
# edit_chart GET    /charts/:id/edit(.:format)     charts#edit
#      chart GET    /charts/:id(.:format)          charts#show
#            PUT    /charts/:id(.:format)          charts#update
#            DELETE /charts/:id(.:format)          charts#destroy