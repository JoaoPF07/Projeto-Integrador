export const api = {

  CarregarEntidadeIndividual: async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    let json = await response.json();
    return json;
  },

  CarregarTodasEntidades: async (param: string) => {
    let response = await fetch("" + param);
    let json = await response.json();
    return json;
  },

  AdicionarEntidades: async (
    email: string,
    senha: string,
    nome: string,
    cnpj: bigint,
    endereco: string,
    complemento: string,
    cidade: string,
    estado: string,
    cep: bigint
  ) => {
    let response = await fetch("", {
      method: "POST",
      body: JSON.stringify({
        email,
        senha,
        nome,
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
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/" + id, {method: 'PUT'})
    let json = await response.json();
    return json;
  },

  DeletarEntidade: async (id: string) => {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/" + id, {method: 'DELETE'})
    let json = await response.json();
    return json;
  },
};
