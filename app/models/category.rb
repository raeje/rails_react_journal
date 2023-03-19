class Category < ApplicationRecord
  validates(:name, presence: true)
  has_many :tasks
end
