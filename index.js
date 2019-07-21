const soap = require("soap")

const url_dev = "https://apphom.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl"
const url_prod = "https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl"

soap.createClient(url_dev, (err, client) => {
  if (err) {
    console.log(err);
  } else {
    client.consultaCEP({
      cep: '58057590'
    }, (err, res) => {
      console.log(res.return);
    })
  }
})