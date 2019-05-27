var TransactionTypes = require('../utils/transaction-types.js');
var constants = require('../utils/constants.js');
var httpCall = require('../utils/httpCall.js');
var belriumJS = require('chain-js');

app.route.put('/CertificateIssue',  async function (req) {
    console.log("req: ", req);

    let Institutename = req.query.Institutename;
    let IssuerName = req.query.IssuerName;
    let CandidateName = req.query.CandidateName;
    let fee = String(constants.fees.CertificateIssue * constants.fixedPoint);
    let type = TransactionTypes.CertificateIssue; // withdraw money to mainchain
    let options = {
        fee: fee,
        type: type,
        args: JSON.stringify([Institutename, IssuerName,CandidateName])
    };
    let secret = req.query.secret;

    let transaction = belriumJS.dapp.createInnerTransaction(options, secret);

    let dappId = req.query.dappId;

    let params = {
        transaction: transaction
    };

    console.log("CertificateData data: ", params);
    var res = await httpCall.call('PUT', `/api/dapps/${dappId}/transactions/signed`, params);

    return res;
});

app.route.put('/get data',  async function (req) {
    console.log("req: ", req);

    let Id = req.query.Id;
    let fee = String(constants.fees.CertificateData * constants.fixedPoint);
    let type = TransactionTypes.CertificateIssue; // withdraw money to mainchain
    let options = {
        fee: fee,
        type: type,
        args: JSON.stringify([Institutename,IssuerName,CandidateName])
    };
    let secret = req.query.secret;

    let transaction = belriumJS.dapp.createInnerTransaction(options, secret);

    let dappId = req.query.dappId;

    let params = {
        transaction: transaction
    };

    console.log("CertificateData data: ", params);
    var res = await httpCall.call('PUT', `/api/dapps/${dappId}/transactions/signed`, params);

    return res;
});

app.route.get('/CertificateData',  async function (req) {
    console.log("req: ", req);
    let result = await app.model.CertificateData.findAll({
        condition: { owner: req.query.address }
    });
    console.log('result: ', result);
    return result;
});
