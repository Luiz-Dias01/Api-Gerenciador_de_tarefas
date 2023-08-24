import {conexao} from './connection.js'


//Inserir Tarefa
export async function Inserir(ins) {
    const comando = 
    `INSERT INTO tb_tarefas (ds_tarefas, nr_ordem, bt_finalizado, dt_cadastro)
            VALUES ROW (?, ?, ?, ?)`

    const [Resp] = await conexao.query(comando, [ins.tarefas, ins.ordem, ins.finalizado, ins.cadastro]);

    return Resp;
}


//Buscar Todas As Tarefas
export async function Buscar(todos) {

    const comando = 
    `SELECT * FROM tb_tarefas;`

    const [Resp] = await conexao.query(comando, [todos]);

    return Resp;
}


//Buscar Por Tarefas Finalizadas
export async function Finalizado(final) {
    console.log(final)

    const comando = 
    `SELECT * FROM tb_tarefas
	        WHERE bt_finalizado = true`

    const [Resp] = await conexao.query(comando, [final]);

    return Resp;
}


//Alterar Tarefa
export async function Alterar(id, alt) {
    const comando = 
    `UPDATE tb_tarefas
	    SET ds_tarefas = ?,
            nr_ordem = ?,
            bt_finalizado = ?,
            dt_cadastro = ?
                WHERE id_tarefas = ?;`

    const [Resp] = await conexao.query(comando, [alt.tarefas, alt.ordem, alt.finalizado, alt.cadastro, id]);
    
    return Resp;
}


//Deletar Uma Tarefa
export async function Deletar(id) {
    const comando = 
    `DELETE FROM tb_tarefas
	        WHERE id_tarefas = ?`

    const [Resp] = await conexao.query(comando, [id]);

    return Resp;
}