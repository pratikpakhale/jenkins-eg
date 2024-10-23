pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                // No build needed for static HTML
                echo 'Static HTML file - no build required'
            }
        }
        
        stage('Test') {
            steps {
                // Basic HTML validation
                sh '''
                    # Check if file exists
                    test -f index.html || exit 1
                    # Optional: Add HTML validation if needed
                '''
            }
        }
        
        stage('Deploy') {
            steps {
                // Copy to web server directory
                sh '''
                    # Create deployment directory if it doesn't exist
                    mkdir -p /var/www/html
                    # Copy index.html to deployment location
                    cp index.html /var/www/html/
                '''
            }
        }
    }
}