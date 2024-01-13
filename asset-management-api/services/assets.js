const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
    `SELECT 
        assetNo, assetDescription, serialNo, dateAcquired, purchasePrice, currentValue, 
        dateSold, nextMaintenanceDate, employeeNo, assetCategoryNo, statusNo 
    FROM Asset LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
    data,
    meta
    }
}

async function create(asset){
    const result = await db.query(
        `INSERT INTO Assets
        (assetNo, assetDescription, serialNo, dateAcquired, purchasePrice, currentValue, dateSold, nextMaintenanceDate) 
        VALUES 
        ('${asset.assetNo}', ${asset.assetDescription}, ${asset.serialNo}, ${asset.dateAcquired}, ${asset.purchasePrice}, ${asset.currentValue}, ${asset.dateSold}, ${asset.dnextMaintenanceDate},)`
    );
        
    let message = 'Error in creating asset';
    
    if (result.affectedRows) {
        message = 'assets created successfully';
    }
    
    return {message};
}

async function update(id, programmingLanguage){
    const result = await db.query(
      `UPDATE programming_languages 
      SET name="${programmingLanguage.name}", released_year=${programmingLanguage.released_year}, githut_rank=${programmingLanguage.githut_rank}, 
      pypl_rank=${programmingLanguage.pypl_rank}, tiobe_rank=${programmingLanguage.tiobe_rank} 
      WHERE id=${id}` 
    );
  
    let message = 'Error in updating programming language';
  
    if (result.affectedRows) {
      message = 'Programming language updated successfully';
    }
  
    return {message};
}

async function remove(id){
    const result = await db.query(
      `DELETE FROM Assets WHERE id=${id}`
    );
  
    let message = 'Error in deleting asset';
  
    if (result.affectedRows) {
      message = 'asset deleted successfully';
    }
  
    return {message};
}  

async function search(id){
    const rows = await db.callSpSearch(id);
    const data = helper.emptyOrRows(rows);
    return {
      data
    }
}

module.exports = {
    getMultiple,
    create,
    update,
    remove,
    search,
}