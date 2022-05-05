class Appointment < ApplicationRecord
    belongs_to :volunteer
    belongs_to :book
end
