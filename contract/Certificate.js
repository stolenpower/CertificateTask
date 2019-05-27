module.exports = {
      CertificateIssue: async function(Institutename, IssuerName, CandidateName) {
        console.log("calling contract");
        app.sdb.lock('Certificate.CertificateIssue@' + this.trs.senderId)
        let exists = await app.model.Certificate.exists({Institutename: Institutename, IssuerName:IssuerName,CandidateName:CandidateName,owner: this.trs.senderId});
        if (!exists) {
            app.sdb.create('Certificate', {
              Institutename: Institutename,
              IssuerName:IssuerName,
              CandidateName:CandidateName,
              owner: this.trs.senderId
            });
        } else {
          return 'Certificate is Created Succesfully';
        }
    },


    let CertificateIssue = [];
  for (let i = 0; i <= data.length; i++) {
      CertificateIssue.push(apicall(data[i]));
  }
  CertificateIssue.all(CertificateIssue).then(() => {

  }).catch(err => {

  });

    CertificateData: async function(Institutename){
        app.sdb.lock('Certificate.CertificateData' + this.trs.senderId)
        let exists = await app.model.Certificate.exists({Institutename: Institutename, owner: this.trs.senderId});
        if (exists){
            app.sdb.add('Certificate',{CertificateIssue: 0},{owner: this.trs.senderId});
        }
        else{
          return 'CertificateData Not Found!';
        }
    }
  }
