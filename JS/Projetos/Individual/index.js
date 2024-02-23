const enviarEmail = require("./envia-email");
const clientes = require("./clientesList");
const templates = require("./templates");

//console.log(clientes);

if (isMonday()) {
  let clientsWithPermission = clientes.filter(
    (client) => client.receberPromocoes
  );

  let emails = [];
  clientsWithPermission.forEach((client) => {
    emails.push(createEmail(client));
  });
  let sentEmails = 0;
  let errors = [];
  emails.forEach((email) => {
    let result = enviarEmail(email.adressee, email.subject, email.body);

    if (result.status == "Error") {
      errors.push(
        `Erro ao enviar email para ${email.adressee}\n${result.message}`
      );
    } else {
      sentEmails++;
    }
  });

  if (sentEmails == emails.length) {
    console.log(
      "Todos os emails foram enviados com sucesso - Total: ",
      sentEmails
    );
  }
  else {
    console.log("Alguns emails tiveram erros no envio:\n\n",...errors)
  }
}

function createEmail(client) {
  let index = Math.floor(Math.random() * 10);

  let selectedEmail = templates[index];

    if(!client.email)
    console.log(`Cliente de id ${client.id}, não possui email cadastrado`)

  return {
    adressee: client.email,
    subject: selectedEmail.subject,
    body: selectedEmail.body.replace("[ClientName]", client.nome),
  };
}

function isMonday() {
  let isMonday = new Date().toDateString().includes("Fri");
  return isMonday;
}
