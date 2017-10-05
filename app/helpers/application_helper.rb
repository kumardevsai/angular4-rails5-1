module ApplicationHelper
  def webpack_path path
    if Rails.env.development?
      "http://localhost:4200/#{path}"
    else
      "assets/#{path}"
    end
  end
end
