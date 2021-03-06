/** 
  * Gladys Project
  * http://gladysproject.com
  * Software under licence Creative Commons 3.0 France 
  * http://creativecommons.org/licenses/by-nc-sa/3.0/fr/
  * You may not use this software for commercial purposes.
  * @author :: Pierre-Gilles Leymarie
  */
  
/**
* UserHouseRelation.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	user: {
      model: 'User',
      required:true
    },

    house:{
    	model:'House',
    	required:true
    },

    userhouserelationtype:{
    	model:'UserHouseRelationType',
        required:true
    }
  }
};

