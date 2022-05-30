/*

1-Obter um usuário
2-obter o número do telefone do usuário pelo ID
3-obter o endereço do usuário

*/

function obterUsuario(callback){
  setTimeout(function() {
      return callback(null,{
          id:1,
          nome:"Aladin",
          nascimento: new Date()
      })
  }, 1000);
}

function obterTelefone(idUsuario, callback){
  setTimeout(function() {
      return callback(null,{
        telefone:'11909090',
        ddd: 11
      })
  }, 2000);
}

function obterEndereco(idUsuario, callback){
   setTimeout(function() {
       return callback(null,{
           rua: 'dos bobos',
           numero: '0'
       })
   }, 2000);
}

function resolverUsuario(erro, usuario){
  console.log('usuario', usuario)
}

obterUsuario(function resolverUsuario(error, usuario){
    if (error) {
        console.error('Deu ruim!', error)
        return;
    }    
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if (error1) {
            console.error('Deu ruim!', error)
            return;
        }    
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
            if (error2) {
                console.error('Deu ruim!', error)
                return;
            }    
            console.log(`
            Nome:${usuario.nome}
            Endereco:${endereco.rua}
            Telefone:(${telefone.ddd})${telefone.telefone}            
          `)
          }
        )
    })
})
//const telefone = obterTelefone(usuario.id)
//console.log('usuario', usuario)
//console.log('telefone', telefone)