import azureStorage from 'azure-storage';
import nconf from 'nconf';

import teaList from '../api/staticData.js'

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
  let upsertTask = {
    PartitionKey:{'_':partitionKey},
    RowKey: {'_':tea.name},
    tea: {'_': JSON.stringify(tea)}
  };
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
    const query = new azureStorage.TableQuery();
    tableService.queryEntities('tea', query, continuationToken || null,
      (error, result, response)=>{
        if(!error){
          result.entries = result.entries.map((entry)=>{
            return JSON.parse(entry.tea._);
          });
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
