class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :product

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :email, :name, :password, :password_confirmation, presence: true
  before_create :default_values

  def admin?
    admin
  end

  private 
    def default_values
      self.role ||= "customer"
    end
end
