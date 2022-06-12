import { db } from '../database/index';

class UserDAO {
    async createUser(email, password, firstName, lastName) {
        const [id] = await db('users')
            .insert({
                email,
                password,
                first_name: firstName,
                last_name: lastName,
            })
            .returning('id');

        return id;
    }


    async getAllUsers() {
        const users = await db('users');
        return users;
    }


    async getUser(user_id) {
        const user = await db('users')
            .where({ id: user_id });

        if (!user.length) {
            return { error: 'User not found' };
        }
        return user;
    }

    async getUserByEmail(user_email) {
        const user = await db('users').
            where({ email: user_email });

        if (!user.length) {
            return false
        }

        return user;
    }


    async deleteUser(user_id) {
        const user = await db('users')
            .where({ id: user_id });

        if (!user.length) {
            return { error: 'Cannot delete! User not found!' }
        }

        await db('users')
            .where({ id: user_id })
            .del();

        return { message: 'User deleted!' }
    }


    async updateUser(user_id, firstName, lastName, email) {
        const user = await db('users')
            .where({ id: user_id });

        if (!user.length) {
            return { error: 'Cannot update! User not found!' }
        }

        await db('users')
            .where({ id: user_id })
            .update({
                email,
                first_name: firstName,
                last_name: lastName
            })

        return { message: 'User updated!' }
    }
}

module.exports = new UserDAO();