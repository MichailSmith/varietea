import stormpath from 'stormpath';
const homedir = (process.platform === 'win32') ?
  process.env.HOMEPATH :
  process.env.HOME;
const keyfile = homedir + '/.stormpath/apiKey.properties';

let stormpathLoadedPromise = new Promise(function(resolve, reject){
  stormpath.loadApiKey(keyfile, (err, apiKey) => {
    if (err) {
      reject(err);
    } else {
      resolve(new stormpath.Client({apiKey: apiKey}));
    }
  });
});

let stormpathApplicationLoadedPromise = stormpathLoadedPromise
  .then(function(client){
    return new Promise(function(resolve, reject){
      client.getApplications({name: 'varietea'}, (err, applications)=>{
        if(err){
          reject(err);
        } else {
          resolve (applications.items[0]);
        }
      })
    });
  });

export default {
  createUser: async (account) => {
    const application = await stormpathApplicationLoadedPromise;
    return new Promise(function(resolve, reject) {
      application.createUser(account, (err, account)=>{
        if(err){
          reject(err);
        } else {
          resolve(account);
        }
      });
    });
  },
  authenticate: async (login) =>{
    const application = await stormpathApplicationLoadedPromise;
    return new Promise(function (resolve, reject) {
      application.authenticateAccount(login, function (err, result) {
        if(err){
          reject(err);
        } else {
          resolve(result.account);
        }
      })
    })
  }
}
