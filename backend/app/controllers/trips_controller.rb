class TripsController < ApplicationController
    before_action :find_user

    def index 
        @trips = @user.trips
        render json: @trips
    end

    def show
        @trip = @user.trip.find_by(id: params[:id])
        render json: @trip
    end
    
    def create
    end

    def update
    end

    def destroy
    end

    private 

    def find_user
        @user = User.find_by(id: params[:user_id])
    end
    
end
