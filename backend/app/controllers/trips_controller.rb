class TripsController < ApplicationController
    before_action :find_user
    
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

    def find_user
        @user = User.find_by(id: params[:user_id])
    end
    
end
