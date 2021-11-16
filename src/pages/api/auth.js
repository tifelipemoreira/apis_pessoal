// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import pool from '../../config/postgres';
import JWT_KEY from '../../services/middleware/tokenSecrete';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default function handler(req, res) {
    if (req.method === 'GET') {
        // rota para login
        pool.connect((err, client, release) => {
            if (err) {
                return console.error('Error acquiring client', err.stack)
            }
            const text = `SELECT * FROM users WHERE user_name = '${req.body.user_name}' `
            //const values = [req.body.user_name]
            // console.log(`values ${[values]}`)
            client.query(text, (error, results, fields) => {
                //libera a conexão após a query
                client.release();
                if (error) {
                    return res.status(500).json({ error: error })
                }
                // se resultado da query meno que 1 significa que usuario não existe no cadastro
                //console.log(`Aqui resultado da query ${results.rows}`)
                if (results.rows.length < 1) {
                    //erro o usuario nao existe na tabela de users é preciso cria-lo
                    return res.status(401).json({ apiret: 1, mensagem: 'Não Autenticado' })
                }
                bcrypt.compare(req.body.password, results.rows[0].password, (err, result) => {
                    // se erro retorna usuario não autenticado.
                    //console.log(results.rows) //registro retornado

                    if (err) {
                        //retorna 2 a senha está incorreta mas o usuario existe
                        return res.status(401).json({ apiret: 2, mensagem: 'Não Autenticado' })
                    }
                    // se result verdadeiro retorna 200 e autenticado com sucesso.
                    console.log(result)
                    if (result) {
                        //retorna 3 pois tudo ocorreu bem autenticado com sucesso

                        const token = jwt.sign({ user_name: results.rows[0].user_name }, JWT_KEY, { expiresIn: "1h" });
                        const name = results.rows[0].user_name
                        console.log(name)
                        // retorna o token 
                        return res.status(200).json({
                            apiret: 5,
                            message: "Autenticado com Sucesso!",
                            user_name: name,
                            token: token
                        })

                    }
                })
            });
        });
    } else {
        res.status(401).json({ return: 'Unauthorized' })
    }
}
/*
export default function handler(req, res) {
res.status(200).json({ name: 'John Doe' })
}
*/
