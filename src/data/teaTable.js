import azureStorage from 'azure-storage';
import nconf from 'nconf';

nconf.env()
  .file({ file: 'config.json', search: true });

const partitionKey = nconf.get('PARTITION_KEY');
const accountName = nconf.get('STORAGE_NAME');
const accountKey = nconf.get('STORAGE_KEY');

let tableService = azureStorage
  .createTableService(accountName, accountKey);

tableService.createTableIfNotExists('tea',
  (error, result, response)=>{
  });

const upsertTea = (tea)=>{
  const upsertTask = Object.assign({
    PartitionKey:partitionKey,
    RowKey: tea.name},
    tea);
  return new Promise(function(resolve, reject){
    tableService.insertOrMergeEntity('tea',upsertTask,
      (error, result, response)=>{
        if(!error){
          resolve(result);
        }
        reject(error);
      });
  })

};

const getAllTeas = (continuationToken) => {
  return new Promise(function(resolve, reject){
    const query = new azureStorage.TableQuery()
      .where('PartitionKey eq ?', partitionKey);
    tableService.queryEntities('tea', query, continuationToken || null,
      (error, result, response)=>{
        if(!error){
          resolve(result);
        }
        reject(error);
      })
  });
};

const getTea = (teaId) => {

};


export default {
  upsertTea,
  getAllTeas,
  getTea
};
