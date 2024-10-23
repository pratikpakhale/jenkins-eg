pipeline {
    agent any
    
    stages {
        stage('Setup Node.js') {
            steps {
                sh '''
                    # Update package list
                    apt-get update
                    
                    # Install curl and Node.js repository
                    apt-get install -y curl
                    curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
                    
                    # Install Node.js and npm
                    apt-get install -y nodejs
                    
                    # Verify installation
                    node --version
                    npm --version
                '''
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        
        stage('Deploy') {
            steps {
                sh '''
                    # Kill existing node process if running
                    pkill node || true
                    
                    # Start the application in background
                    nohup npm start > output.log 2>&1 &
                    
                    # Wait for app to start
                    sleep 5
                    
                    echo "Application deployed at http://localhost:3000"
                '''
            }
        }
    }
}