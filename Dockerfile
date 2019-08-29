# Use an official Fedora runtime as a parent image
FROM fedora:29

# Set the working directory to /app
# and copy the current directory to it
WORKDIR /app
COPY . /app

# Install dnf dependencies
RUN dnf install -y \
        nmap \
        npm nodejs

# Install npm dependencies
RUN npm install -g @angular/cli
RUN npm install

# Run app, listening on port 80
ENTRYPOINT ["ng", "serve", "--prod"]
