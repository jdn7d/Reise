class DestinationsController < ApplicationController
    before_action :find_trip 
    
    def index 
    end

    def show
    end
    
    def create
    end

    def update
    end

    def destroy
    end

    private
    
    def find_trip
        @trip = Trip.find_by(id: params[:trip_id])
    end
end
