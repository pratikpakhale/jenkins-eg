pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                // Build the Docker image
                sh 'docker build -t mywebapp .'
            }
        }
        
        stage('Test') {
            steps {
                // Run tests (example)
                sh '''
                    docker run -d --name test_container mywebapp
                    # Add your test commands here
                    docker stop test_container
                    docker rm test_container
                '''
            }
        }
        
        stage('Deploy') {
            steps {
                // Deploy the application
                sh '''
                    docker stop production_container || true
                    docker rm production_container || true
                    docker run -d --name production_container -p 8080:80 mywebapp
                '''
            }
        }
    }
}