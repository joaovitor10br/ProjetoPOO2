import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class LanceService {
    constructor(){

    }

    async createLance(dadosLance: Prisma.LanceCreateInput){
        try{
            const lance = await prisma.lance.create({
                data: dadosLance
            })
            return lance;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async listLance(id?: string) {
        try{
            if(id){
                const lance = await prisma.lance.findUnique({
                    where: {
                        id
                    }
                });
                return lance;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updatedLance(id: string, lance: Prisma.LanceCreateInput){
        try{
            const updatedLance = await prisma.lance.update({
                where: {
                    id
                },
                data: lance
            })
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteLance(id: string){
        try{
            const deletedLance = await prisma.lance.delete({
                where: {
                    id
                }
            })
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new LanceService;