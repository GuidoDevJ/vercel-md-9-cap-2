export default function handler(req, res) {
    res.status.json({
        name: req.body,
        msg: req.query
    })
}