const router = require('express').Router();

router.get('/ws/:country/titles/online_prices', (request, response) => {
	let { title: titleIds } = request.query;
	const prices = [];

	// Express marks the query param as an array but it just puts the full string as one value
	// Need to manually split the IDs
	titleIds = titleIds[0].split(',');

	// Just mark every title as free, we don't charge money here
	for (const titleId of titleIds) {
		prices.push({
			title_id: titleId,
			eshop_sales_status: 'onsale',
			price: {
				regular_price: {
					amount: '$39.99',
					currency: 'USD',
					raw_value: '39.99',
					id: titleId === '50010000045116' ? 2144794400 : 1234567890
				}
			},
			title_owned: false
		});
	}

	response.json({
		online_prices: {
			online_price: prices
		}
	});
});

module.exports = router;