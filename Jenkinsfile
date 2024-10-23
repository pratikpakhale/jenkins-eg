pipeline {
    agent any
    
    stage('Setup Node.js') {
    steps {
        sh '''
            # Update package list
            sudo apt-get update
            
            # Install curl and Node.js repository
            sudo apt-get install -y curl
            curl -fsSL https://deb.nodesource.com/setup_18.x | sudo bash -
            
            # Install Node.js and npm
            sudo apt-get install -y nodejs
            
            # Verify installation
            node --version
            npm --version
        '''
    }
}
    
    stages {
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
    
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}