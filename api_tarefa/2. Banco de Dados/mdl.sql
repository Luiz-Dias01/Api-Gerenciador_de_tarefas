-- Inserir Registros
INSERT INTO tb_tarefas (ds_tarefas, nr_ordem, bt_finalizado, dt_cadastro)
		VALUES ROW ("Criar API de tarefas", 1, false, "2023-08-24");
        
-- Buscar Todos
SELECT * FROM tb_tarefas;

-- Buscar Tarefas Finalizadas
SELECT * FROM tb_tarefas
	WHERE bt_finalizado = true;
    
-- Alterar Tarefas 
UPDATE tb_tarefas
	SET ds_tarefas = "",
		nr_ordem = 1,
        bt_finalizado = true,
        dt_cadastro = "2023-08-24"
			WHERE id_tarefas = 1;
            
-- Deletar Tarefas
DELETE FROM tb_tarefas
	WHERE id_tarefas = 1;