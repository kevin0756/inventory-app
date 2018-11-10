let env = process.env.NODE_ENV || 'dev'   // 1
let mongodb_uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/InventoryDB'
console.log('the env is ' + env);
process.env.MONGODB_URI = mongodb_uri;
