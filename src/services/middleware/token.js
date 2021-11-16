import verify from 'jsonwebtoken';
import JWT_KEY from '../middleware/tokenSecrete';

export default (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        // const decode = jwt.verify(token, process.env.JWT_KEY);
        console.log('teste' + JWT_KEY)
        const decode = verify(token, JWT_KEY);
        req.usuario = decode;
        next();
    } catch (error) {
        return res.status(401).send({ mensagem: 'Falha na autenticação token' })
    }
}