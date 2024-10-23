pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3000:3000'
        }
    }
    
    environment {
        CI = 'true'
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
}