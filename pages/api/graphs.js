export default async function handler(req, res) {
  console.log('send', req.query);
  let response = await fetch(`http://launchpadmcquack-001-site1.htempurl.com/api/measurement/${req.query.areacode}?start=${req.query.start}&end=${req.query.end}`);
  let data = await response.json();
  res.status(response.status).json(data);
}