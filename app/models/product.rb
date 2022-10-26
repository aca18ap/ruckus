class Product < ApplicationRecord
    belongs_to :user, optional: true
    validates :name, :brand, :size, :color, presence: true 
    has_many_attached :images
end
