module.exports = {
  apps: [{
    name: 'iot-talks-2019',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-35-172-193-18.compute-1.amazonaws.com',
      key: '~/.ssh/iot-talks-2019.pem',
      ref: 'origin/master',
      repo: 'git@github.com:MGenteluci/server-iot-talks-2019.git',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
