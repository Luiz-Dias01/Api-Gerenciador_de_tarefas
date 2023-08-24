-- Inserir Registros
INSERT INTO tb_tarefas (ds_tarefas, nr_ordem, bt_finalizado, dt_cadastro)
		VALUES ROW ("?", ?, ?, "?");
        
-- Buscar Todos
SELECT * FROM tb_tarefas;

-- Buscar Tarefas Finalizadas
SELECT * FROM tb_tarefas
	WHERE bt_finalizado = ?;
    
-- Alterar Tarefas 
UPDATE tb_tarefas
	SET ds_tarefas = "?",
		nr_ordem = ?,
        bt_finalizado = ?,
        dt_cadastro = "?"
			WHERE id_tarefas = ?;
            
-- Deletar Tarefas
DELETE FROM tb_tarefas
	WHERE id_tarefas = ?;