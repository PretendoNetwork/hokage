const router = require('express').Router();

// TODO:
// Check `country` and make this dynamic
router.get('/ws/country/:country', (request, response) => {
	response.json({
		country_detail: {
			region_code: 'USA',
			max_cash: {
				amount: '$200.00',
				currency: 'USD',
				raw_value: '200'
			},
			loyalty_system_available: false,
			legal_payment_message_required: false,
			legal_business_message_required: false,
			tax_excluded_country: true,
			tax_free_country: false,
			prepaid_card_available: true,
			credit_card_available: true,
			credit_card_store_available: true,
			jcb_security_code_available: false,
			nfc_available: false,
			coupon_available: false,
			my_coupon_available: true,
			price_format: {
				positive_prefix: '$',
				positive_suffix: '',
				negative_prefix: '-$',
				negative_suffix: '',
				formats: {
					format: [
						{
							value: '#,###,###,###.##',
							digit: '#'
						}
					],
					pattern_id: '2'
				}
			},
			default_timezone: '-08:00',
			eshop_available: true,
			name: 'United States',
			iso_code: 'US',
			default_language_code: 'en',
			language_selectable: true
		}
	});
});

module.exports = router;