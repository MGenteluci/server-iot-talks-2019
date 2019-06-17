module.exports = {
  apps: [{
    name: 'server-iot-talks-2019',
    script: './bin/www',
    env: {
      NODE_ENV: 'production',
      MONGO_URL: 'mongodb+srv://admin:admin@cluster0-5msyk.mongodb.net/iot-talks-2019?retryWrites=true&w=majority'
    }
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-35-172-193-18.compute-1.amazonaws.com',
      key: '~/.ssh/iot-talks-2019.pem',
      ref: 'origin/master',
      repo: 'git@github.com:MGenteluci/server-iot-talks-2019.git',
      path: '/home/ubuntu/server-iot-talks-2019',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
