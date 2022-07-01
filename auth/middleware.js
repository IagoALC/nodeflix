import passport from 'passport';

export default {
    local: (req, res, next) => {
        passport.authenticate('local', { session: false }, (err, user, info) => {
            if (err && err.name == "InvalidArgumentError") {
                return res.status(401).json({ error: err.message });
            }
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (!user) {
                return res.status(401).json(info);
            }
            req.user = user;
            next();
        })(req, res, next);
    },
    bearer: (req, res, next) => {
        passport.authenticate('bearer', { session: false }, (err, user, info) => {
            if (err && err.name == "JsonWebTokenError") {
                return res.status(401).json({ error: err.message });
            }
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (!user) {
                return res.status(401).send('Unauthorized');
            }
            req.user = user;
            next();
        })(req, res, next);
    }
}