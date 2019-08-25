# Use an official Fedora runtime as a parent image
FROM fedora:29

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app
RUN cd /app

# Install basic network diagnostic tools
RUN dnf install nmap -y
# Install NodeJS
RUN dnf install npm nodejs -y

# Install npm dependencies
RUN npm install -g @angular/cli
RUN npm install

# Make required ports available to outside world
EXPOSE 80

# Run app
ENTRYPOINT ng serve --host 0.0.0.0 --port 80
