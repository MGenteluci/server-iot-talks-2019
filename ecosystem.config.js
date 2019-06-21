module.exports = {
  apps: [{
    name: 'server-iot-talks-2019',
    script: './bin/www',
    env: {
      NODE_ENV: 'production',
      MONGO_URL: '{mongo-url}'
    }
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: '{host-url}',
      key: '~/.ssh/iot-talks-2019.pem',
      ref: 'origin/master',
      repo: 'git@github.com:MGenteluci/server-iot-talks-2019.git',
      path: '/home/ubuntu/server-iot-talks-2019',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
