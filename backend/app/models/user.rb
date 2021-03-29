class User < ApplicationRecord
    has_secure_password
    has_many :trips, dependent: :destroy
    has_many :destinations, through: :trips
end
