class Book < ApplicationRecord
    has_many :appointments
    has_many :volunteers through: :appointments
end
