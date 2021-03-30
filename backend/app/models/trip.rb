class Trip < ApplicationRecord
    belongs_to :user
    has_many :destinations, dependent: :destroy
end
