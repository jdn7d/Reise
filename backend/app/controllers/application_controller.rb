class ApplicationController < ActionController::API

    def encode_token(payload)
        JWT.encode payload, ENV['JWT_SECRET']
    end

    def decoded_token
        if auth_header
          token = auth_header.split(' ')[1]
          begin
            JWT.decode(token, ENV['JWT_SECRET'])[0]
          rescue JWT::DecodeError
            nil
          end
        end
      end

    def auth_header 
        request.headers['Authorization']
    end
    


end
