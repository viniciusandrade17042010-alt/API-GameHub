export function validarId(req, res, next) {
    const id = Number(req.params.id);

    if (!/^\d+$/.test(req.params.id) || !Number.isSafeInteger(id) || id <= 0) {
        return res.status(400).json({ erro: "O ID deve ser um número inteiro positivo" });
    }

    req.id = id;
    next();
}

// src/middlewares/validarEstudio.js
import { textoValido } from "../utils/validacoes.js";

export function validarEstudio(req, res, next) {
  const { nome } = req.body; // Altere para os campos do seu estúdio

  if (!textoValido(nome, 100)) {
    return res.status(400).json({ 
      mensagem: "O campo 'nome' é obrigatório e deve ter no máximo 100 caracteres." 
    });
  }

  next();
}