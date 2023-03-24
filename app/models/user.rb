# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string
#  password        :string
#  password_digest :string
#  token           :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#


class User < ApplicationRecord
  has_secure_password
  include BCrypt

  validates(:email, presence: true, uniqueness: true)
  validates(:password, presence: true)
  has_many :category
  has_many :tasks, through: :categories

  def self.signup(user_params)
    password_hash = Password.create(user_params[:password])
    create(email: user_params[:email], password: password_hash)
  end
end
