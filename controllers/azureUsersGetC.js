const azureUser = require('../model/azureUsers');
exports.dictionaryDataGet = async (req, res) => {

    try {
        azureUser.findAll().then(result=>{
            res.status(200).json({
                data: result,

            });
        }
        ).catch(e=>{
            console.log(e);
        });
    }catch (e) {
        console.log(e);
    }
}


