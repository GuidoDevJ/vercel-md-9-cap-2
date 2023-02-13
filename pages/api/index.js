export default function handler(req, res) {
    console.log(req, res)
    res.status(200).json({
        name: "Hola",
        msg: "la query"
    })
}