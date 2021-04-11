import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Marcelo' },
        { id: 2, name: 'cortes' },
        { id: 3, name: 'te' },
    ]

    return response.json(users);
}