class Volunteer < ApplicationRecord
    has_many :appointments
    has_many :books, through: :appointments

    has_secure_password

    validates :username, presence: true, uniqueness: true
end
