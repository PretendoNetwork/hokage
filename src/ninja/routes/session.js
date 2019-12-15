// TODO:
// Actual session stuff is not done yet!

const router = require('express').Router();

router.post('/ws/my/session/!open', (request, response) => {
	response.cookie('AWSELB', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', {
		path: '/ninja',
		httpOnly: true
	});
	response.cookie('JSESSIONID', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', {
		path: '/ninja',
		httpOnly: true
	});

	response.json({
		session_config: {
			pid: 1234567890,
			account_id: 'eShop Test Account',
			mii: {
				name: 'eShop Test Account',
				icon_url: 'https://mii-secure.cdn.nintendo.net/u2jg043u028x_normal_face.png'
			},
			country: 'US',
			saved_lang: 'en',
			shop_account_initialized: false,
			device_link_updated: false,
			owned_titles_modified: Date.now(),
			shared_titles_last_modified: Date.now(),
			owned_wii_titles_last_modified: Date.now(),
			age: 18,
			server_time: Date.now(),
			devices: {
				device: [
					{
						name: 'CTR',
						initial_device_account_id: '123456789',
						npns_ready: true,
						id: 4
					},
					{
						name: 'WUP',
						id: 5
					}
				]
			},
			parental_controls: {
				parental_control: [
					{
						device: 'CTR',
						type: 'game_rating_age',
						value: 0
					},
					{
						device: 'CTR',
						type: 'game_rating_lock',
						value: 0
					},
					{
						device: 'CTR',
						type: 'shopping',
						value: 0
					},
					{
						device: 'WUP',
						type: 'game_rating_age',
						value: 17
					},
					{
						device: 'WUP',
						type: 'game_rating_lock',
						value: 0
					},
					{
						device: 'WUP',
						type: 'shopping',
						value: 0
					}
				]
			},
			auto_billing_contracted: false,
			id: '73AEA274DC14525E7F52ADFC2AB1575A' // MD5 of Pretendo eShop
		}
	});
});

router.post('/ws/my/session/!close', (request, response) => {
	response.send('');
});

router.get('/ws/my/wishlist/notice', (request, response) => {
	response.json({
		wishlist_notice: {
			wished_title_id: [],
			total: 0
		}
	});
});

router.get('/ws/my/wishlist', (request, response) => {
	response.json({
		wishlist: {
			total: 0
		}
	});
});

router.get('/ws/my/balance/current', (request, response) => {
	response.json({
		balance: {
			amount: '$0.00',
			currency: 'USD',
			raw_value: '0'
		}
	});
});

router.get('/ws/my/owned_coupons', (request, response) => {
	response.json({
		coupons: {}
	});
});

router.get('/ws/my/shared_title_ids', (request, response) => {
	response.json({
		owned_titles: {
			owned_title: [],
			length: 0,
			total: 0
		},
		owned_wii_titles: {
			owned_title: [],
			total: 0
		}
	});
});

router.post('/ws/my/npns_status', (request, response) => {
	response.json({});
});

module.exports = router;