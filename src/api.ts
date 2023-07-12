export const api = {
  CarregarEntidadeIndividual: async () => {
    let response = await fetch("http://localhost:3000/entidades");
    let json = await response.json();
    return json;
  },

  CarregarTodasEntidades: async (param: string) => {
    let response = await fetch("http://localhost:3000/entidades" + param);
    let json = await response.json();
    return json;
  },

  AdicionarEntidade: async (
    email: string,
    senha: string,
    nome: string,
    telefone: string,
    cnpj: string,
    endereco: string,
    complemento: string,
    cidade: string,
    estado: string,
    cep: string
  ) => {
    let response = await fetch("http://localhost:3000/entidades", {
      method: "POST",
      body: JSON.stringify({
        email,
        senha,
        nome,
        telefone,
        cnpj,
        endereco,
       complemento,
        cidade,
        estado,
        cep,
      }),
      headers: {
        "content-Type": "application/json",
      },
    });
    let json = await response.json();

    console.log(json);
    return json;
  },

  AlterarEntidade: async (id: string) => {
    let response = await fetch("http://localhost:3000/entidades" + id, {
      method: "PUT",
    });
    let json = await response.json();
    return json;
  },

  DeletarEntidade: async (id: string) => {
    let response = await fetch("http://localhost:3000/entidades" + id, {
      method: "DELETE",
    });
    let json = await response.json();
    return json;
  },
};
