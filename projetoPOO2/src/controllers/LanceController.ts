import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LancesService from "../services/LancesService";

class LanceController {
    constructor(){

    }

    async createLance(req: Request, res: Response){
        const dadosLance : Prisma.LanceCreateInput = req.body;

        if(dadosLance.id !== "" && dadosLance.comprador !== ""){
            const newLance = await LancesService.createLance(dadosLance)
            res.status(200).json({
                status: 'ok',
                newLance: newLance
            });
        }else{
            res.status(400).json({
                
            })
        }
    }
}