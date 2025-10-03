import PessoaFisica from "./Pessoa/PessoaFisica.js";
import PessoaJuridica from "./Pessoa/PessoaJuridica.js";

let msg = (msg) => {console.log(msg);}

const pf1 = new PessoaFisica('Helena Silva', '12345678955');
const pj1 = new PessoaJuridica('Castro Advogados', '64.298.694/0001-78');

// msg(pf1.apresentar());
// msg(pj1.apresentar());

import Conta from "./banco/Conta.js";

const conta1 = new Conta('1456');
const conta2 = new Conta('9977');
msg(conta1.status());
conta1.depositar(1500);
conta1.sacar(750);
msg(conta1.status());

msg(conta2.status());
conta1.transferir(conta2, 500);
msg(conta2.status());
msg(conta1.status());

