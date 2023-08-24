import { Inserir, Buscar, Finalizado, Alterar, Deletar } from "../repository/tarefaRepository.js";

import { Router } from "express";
const server = Router()


server.post('/tarefa', async (req, resp) => {
    try {
        const inserir = req.body;
        const inserirTarefa = await Inserir(inserir);

        resp.send(inserirTarefa);

    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

server.get('/tarefa', async (req, resp) => {
    try {
        const {buscar} = req.query;
        const buscarTarefa = await Buscar(buscar);

        resp.send(buscarTarefa)
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

server.get('/tarefa/finalizado', async (req, resp) => {
    try {
        const {final} = req.query;
        const buscarFinalizado = await Finalizado(final);
        console.log(final)

        resp.send(buscarFinalizado);

    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

server.put('/tarefa/:id', async (req, resp) => {
    try {
        const {id} = req.params;
        const alt = req.body;
        const AlterarTarefa = await Alterar(id, alt);

        resp.send(AlterarTarefa);

    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

server.delete('/tarefa/:id', async (req, resp) => {
    try {
        const {id} = req.params;
        const del = await Deletar(id)

        resp.send(del);

    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

export default server;