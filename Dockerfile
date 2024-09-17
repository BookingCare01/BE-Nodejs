# Sử dụng image Node.js chính thức làm base image
FROM node:18

# Thiết lập thư mục làm việc trong container
WORKDIR /usr/src/app

# Sao chép các tệp package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Sao chép mã nguồn vào container
COPY . .

# Set environment variables
ENV PORT=9000
ENV NODE_ENV=development
ENV URL_REACT=http://localhost:3000

# Xây dựng ứng dụng (nếu cần)
RUN npm start

# Mở cổng ứng dụng
EXPOSE 9000


# Chạy ứng dụng
CMD ["node", "server.js"]
