const add = require('date-fns/add');
const format = require('date-fns/format');

module.exports = {
  get: (req, res) => {
    if (!req.query.departureDate || !req.query.arrivalDate) {
      res.status(404).send({
        error: 'fullfill all requried query string',
      });
    } else {
      const { departureDate, arrivalDate } = req.query;
      const departureWithSch = format(add(new Date(), { days: Number(departureDate) }), "YYYYMMddhhmm");
      const arrivalWithSch = format(add(new Date(), { days: Number(departureDate) + Number(arrivalDate) }), "YYYYMMddhhmm");
      req.session.departureDate = departureWithSch;
      req.session.arrivalDate = arrivalWithSch;
    }
  }
};

