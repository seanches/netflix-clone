import { NextApiRequest } from 'next';
import { getSession } from 'next-auth/react';

import prismadb from '@/lib/prismadb';

const serverAuth = async (request: NextApiRequest) => {
    const userSession = await getSession({request});

    if (!userSession?.user?.email) {
        throw new Error('User is not signed in');
    }

    const loggedUser = await prismadb.user.findUnique({
        where: {
            email: userSession.user.email
        }
    });

    if (!loggedUser) {
        throw new Error('User is not signed in');
    }

    return { loggedUser }
}

export default serverAuth