import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserService {
    constructor() {

    }

    async createUser(user: Prisma.UserCreateInput){
        try{
            const newUser = prisma.user.create({
                data: user
            });
            return newUser;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async listUser(id?: string) {
        try{
            if(id){
                const user = await prisma.user.findUnique({
                    where: {
                        id
                    }
                });
                return user;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateUser(id: string, user: Prisma.UserCreateInput){
        try{
            const updatedUser = await prisma.user.update({
                where: {
                    id
                },
                data: user
            });
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteUser(id: string){
        try{
            const deletedUser = await prisma.user.delete({
                where: {
                    id
                }
            });
            return deletedUser;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new UserService;