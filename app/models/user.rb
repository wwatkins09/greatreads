class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  after_create :create_default_shelves
  after_initialize :ensure_session_token

  has_many :bookshelves, dependent: :destroy
  has_many :bookshelf_ownerships, through: :bookshelves
  has_many :reviews, dependent: :destroy
  has_many :books,
  through: :bookshelves

  has_attached_file :photo, default_url: "empty_photo.png", :s3_protocol => :https
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/


  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def create_default_shelves
    Bookshelf.create(name: "Read", user_id: self.id, default_shelf: true)
    Bookshelf.create(name: "Currently Reading", user_id: self.id, default_shelf: true)
    Bookshelf.create(name: "Want to Read", user_id: self.id, default_shelf: true)
  end


end
