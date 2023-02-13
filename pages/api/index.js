export default function handler(req, res) {
    res.status(200).json({
        name: "Hola",
        msg: "la query"
    })
}