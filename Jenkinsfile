pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                echo 'Static HTML file - no build required'
            }
        }
        
        stage('Test') {
            steps {
                sh '''
                    # Check if file exists
                    test -f index.html || exit 1
                '''
            }
        }
        
        stage('Deploy') {
            steps {
                sh '''
                    # Deploy to Jenkins workspace
                    mkdir -p ${WORKSPACE}/public
                    cp -r index.html ${WORKSPACE}/public/
                    
                    # Print deployment location for verification
                    echo "Deployed to: ${WORKSPACE}/public/"
                '''
            }
        }
    }
}