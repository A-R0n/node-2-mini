module.exports = {
    getPlanes: (req, res, next) => {
        let dbInstance = req.app.get('db')
        dbInstance.get_planes([25])
        .then(planes => {res.status(200).send(planes); })
        .catch(err => {
            console.log(err);
            res.status(500).send(err)
        });
    },

    delPlanes: (req, res, next) => {
        let dbInstance = req.app.get('db')
        dbInstance.del_planes(['boob'])
        .then(planes => {res.status(200).send(planes); })
        .catch(err => {
            console.log(err);
            res.status(500).send(err)
        });
    }
};
