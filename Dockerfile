# Development Stage (includes Node.js and npm)
FROM serversideup/php:8.3-fpm-nginx as dev

USER root

# Install Node.js and npm for development
RUN apt-get update && apt-get install -y curl git unzip && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Set work directory
WORKDIR /var/www/html

# Copy application files
COPY --chown=www-data:www-data . .

# Install PHP dependencies (Composer)
RUN composer install --no-dev --optimize-autoloader --no-interaction --no-progress --prefer-dist

# Install Node.js dependencies and run Vite for development
RUN npm install --legacy-peer-deps

# Drop to unprivileged user
USER www-data

# Final Stage for Production (no Node.js)
FROM serversideup/php:8.3-fpm-nginx as prod

# Set work directory
WORKDIR /var/www/html

# Copy the application files from the build stage
COPY --chown=www-data:www-data --from=dev /var/www/html /var/www/html

# Drop to unprivileged user
USER www-data
