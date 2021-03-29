class DestinationsController < ApplicationController

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
    
    def find_trip
        @trip = Trip.find_by(id: params[:trip_id])
    end
end
