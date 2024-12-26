#Using the datascience-notebook as base
FROM jupyter/datascience-notebook:latest

# Set the working directory in the container
WORKDIR /app

# Copy the local requirements file to the container
COPY *.* .

# Install dependencies from the requirements file
RUN pip install --no-cache-dir -r requirements.txt