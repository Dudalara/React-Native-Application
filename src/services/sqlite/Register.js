import db from './SQLiteDatabase'

/**
 * INICIALIZAÇÃO DA TABELA
 * - Executa sempre, mas só cria a tabela caso não exista (primeira execução)
 */
db.transaction(tx => {

  //<<<<<<<<<<<<<<<<<<<<<<<< USE ISSO APENAS DURANTE OS TESTES!!! >>>>>>>>>>>>>>>>>>>>>>>
 tx.executeSql(
   "DROP TABLE register;"
  )
  //<<<<<<<<<<<<<<<<<<<<<<<< USE ISSO APENAS DURANTE OS TESTES!!! >>>>>>>>>>>>>>>>>>>>>>>

  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS register (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, date TEXT, rg INT, family INT, address TEXT, cep TEXT);"
  )
})

/**
 * CRIAÇÃO DE UM NOVO REGISTRO
 * - Recebe um objeto;
 * - Retorna uma Promise:
 *  - O resultado da Promise é o ID do registro (criado por AUTOINCREMENT)
 *  - Pode retornar erro (reject) caso exista erro no SQL ou nos parâmetros.
 */
const create = (obj) => {
  return new Promise( (resolve, reject) => {

    db.transaction(
      tx => {
        //comando SQL modificável
        tx.executeSql("INSERT INTO register (name, date, rg, family, address, cep) values (?, ?, ?,?,?,?);", [obj.name, obj.date, obj.rg, obj.family, obj.address, obj.cep], 
        //-----------------------
          (_, {rowsAffected, insertId}) => {
            if(rowsAffected > 0)
              resolve(insertId)
            else
              reject('Error inserting obj: '+JSON.stringify(obj)) // insert falhou
          },
          (_, error) => reject(error) // erro interno em tx.executeSql
          )
      }
    )

  })
}






/**
 * BUSCA TODOS OS REGISTROS DE UMA DETERMINADA TABELA
 * - Não recebe parâmetros;
 * - Retorna uma Promise:
 *  - O resultado da Promise é uma lista (Array) de objetos;
 *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL;
 *  - Pode retornar um array vazio caso não existam registros.
 */
const all = () => {
  return new Promise( (resolve, reject) => {

    db.transaction(
      tx => {
        //comando SQL modificável
        tx.executeSql("SELECT * FROM register;", [], 
        //-----------------------
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error) // erro interno em tx.executeSql
        )
      }
    )

  })
}



export default {
  create,
  all,
  
}
