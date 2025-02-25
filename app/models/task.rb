class Task < ApplicationRecord
  validates :title, presence: true, length: { maximum: 100 }
  validates :description, presence: true, length: { maximum: 500 }
  validates :priority, numericality: { only_integer: true, greater_than: 0, less_than_or_equal_to: 10 }
  validates :due_date, presence: true
end
