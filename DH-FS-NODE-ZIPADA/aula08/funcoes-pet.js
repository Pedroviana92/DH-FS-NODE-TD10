const listarPets = (pets) => {
    pets.forEach((pet) => {
      console.log("Nome: " + pet.nome);
      console.log("Tipo: " + pet.tipo);
    })
  } 
  module.exports = {
      listarPets
  }