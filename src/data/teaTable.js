import azureStorage from 'azure-storage';
import nconf from 'nconf';

nconf.env()
  .file({ file: 'config.json', search: true });

const partitionKey = nconf.get('PARTITION_KEY');
const accountName = nconf.get('STORAGE_NAME');
const accountKey = nconf.get('STORAGE_KEY');
const tableName = 'tea';

let tableService = azureStorage
  .createTableService(accountName, accountKey);

tableService.createTableIfNotExists(tableName,
  (error, result, response)=>{
  });

const upsertTea = (tea)=>{
  let upsertTask = {
    PartitionKey:{'_':partitionKey},
    RowKey: {'_':tea.name},
    tea: {'_': JSON.stringify(tea)}
  };
  return new Promise(function(resolve, reject){
    tableService.insertOrMergeEntity(tableName,upsertTask,
      (error, result, response)=>{
        if(!error){
          resolve(result);
        } else {
          reject(error);
        }
      });
  })

};

const getAllTeas = (continuationToken) => {
  return new Promise(function(resolve, reject){
    const query = new azureStorage.TableQuery();
    tableService.queryEntities(tableName, query, continuationToken || null,
      (error, result, response)=>{
        if(!error){
          result.entries = result.entries.map((entry)=>{
            return JSON.parse(entry.tea._);
          });
          resolve(result);
        } else {
          reject(error);
        }
      });
  });
};

const getTea = (teaName) => {
  return new Promise(function (resolve, reject) {
    tableService.retrieveEntity(tableName, partitionKey, teaName,
      (error, result, response)=>{
        if(!error){
          resolve(JSON.parse(entry.tea._));
        } else {
          reject(error);
        }
      });
  });
};


export default {
  upsertTea,
  getAllTeas,
  getTea
};
