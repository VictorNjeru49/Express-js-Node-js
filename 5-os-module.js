const os = require('os');

const user = os.userInfo();
console.log(user);
console.log(`the system uptime is ${os.uptime()} seconds`);



