const router = require('express').Router();

router.get('/ws/service_hosts', (request, response) => {
	response.json({
		services: {
			service: [
				{
					name: 'SAMURAI_CTR',
					origin_fqdn: 'samurai.ctr.shop.nintendo.net',
					cdn_fqdn: 'samurai-ctr.cdn.nintendo.net'
				},
				{
					name: 'EOU',
					origin_fqdn: 'eou.c.shop.nintendowifi.net',
					cdn_fqdn: 'eou.ctr.eshop.nintendo.net'
				},
				{
					name: 'CCIF',
					origin_fqdn: 'ccif.ctr.shop.nintendo.net'
				}
			]
		}
	});
});

module.exports = router;