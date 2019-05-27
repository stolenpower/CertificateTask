module.exports = async function () {
  console.log('enter dapp init')

  app.registerContract(2001, 'Certificate.CertificateIssue');
  console.log("app.contract: ", app.contract);

  app.registerContract(2002, 'Certificate.CertificateData');
  console.log("app.contract: ", app.contract);

  console.log("app.contract: ", app.contract);

  app.events.on('newBlock', (block) => {
    console.log('new block received', block.height)
  })
}
