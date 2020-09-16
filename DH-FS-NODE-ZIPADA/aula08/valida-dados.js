const validaDados = (novoPet) => {
    return (
      // novoPet.id &&
      novoPet.nome && 
      novoPet.tipo &&
      novoPet.raca &&
      novoPet.idade &&
      novoPet.genero &&
      // validando se o tipo da propriedade vacinado e booleano ou nao atraves do typeof 
      typeof novoPet.vacinado == "boolean"
    )
  }

  module.exports ={
      validaDados
  }