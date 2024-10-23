pipeline {
    agent any
    
    environment {
        CI = 'true'
    }

    stages {
        
        stage('Install Dependencies') {
            steps {
                sh '/home/pratz/.nvm/versions/node/v22.7.0/bin/npm install'
            }
        }
        
        stage('Test') {
            steps {
                sh '/home/pratz/.nvm/versions/node/v22.7.0/bin/npm test'
            }
        }
        
        stage('Deploy') {
            steps {
                sh '''
                    # Kill existing node process if running
                    pkill node || true
                    
                    # Start the application in background
                    nohup /home/pratz/.nvm/versions/node/v22.7.0/bin/npm start > output.log 2>&1 &
                    
                    # Wait for app to start
                    sleep 5
                    
                    echo "Application deployed at http://localhost:3000"
                '''
            }
        }
    }
}