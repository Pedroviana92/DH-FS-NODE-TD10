const { validaDados } = require('./valida-dados');


const cadastrarPet = (pets, objetoPet) => {
    if(typeof objetoPet == "object"){
      if(validaDados(objetoPet)){
  
        let novoObjeto = {
          id: pets.length + 1,
          ...objetoPet
        }
  
        pets.push(novoObjeto)
        console.log(pets)
      } else {
        console.log("O objeto não tem todas propriedades necessárias informadas")
      }
    } else { 
      console.log("Insira um objeto válido")
    }
  }
  module.exports = {
      cadastrarPet
  }