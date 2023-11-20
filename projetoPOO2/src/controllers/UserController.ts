import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController{
    constructor(){

    }

    async createUser(req: Request, res: Response){
        const dadosUsuario : Prisma.UserCreateInput = req.body;

        if(dadosUsuario.email !== "" && dadosUsuario.name !== "") {
            const newUser = await UserService.createUser(dadosUsuario)
            res.status(200).json({
                status: 'ok',
                newUser: newUser
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Insira seus dados novamente'
            })
        }
    }

    async listUsers(req: Request, res: Response){
        const usuario = UserService.listUser();

        res.status(200).json({
            status: 'ok',
            usuario: usuario
        })
    }

    async deleteUser(req: Request, res: Response){
        res.send('Usuario deletado');
    }

    async updatedUser(req: Request, res: Response){
        res.send('Usuario atualizado');
    }
}

export default new UserController;