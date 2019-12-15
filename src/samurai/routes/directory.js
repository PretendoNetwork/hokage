const router = require('express').Router();

// Main eShop screen layout
router.get('/ws/:region/directories', (request, response) => {
	response.json({
		directories: {
			directory: [
				{
					alias: '60043C3FA22E5D8D3D98D0DADA2B083E',
					banner_url: 'https://i.imgur.com/tbZsSVb.jpg',
					icon_url: 'https://i.imgur.com/dINB9cQ.jpg',
					icon_height: '96',
					icon_width: '128',
					id: 1234567,
					index: 1,
					name: 'RetroArch',
					new: false,
					standard: false,
					type: 'normal'
				}
			],
			length: 1,
			catalog_id: 12345
		}
	});
});

// title bundle
router.get('/ws/:region/directory/:id', (request, response) => {
	response.json({
		directory: {
			alias: '60043C3FA22E5D8D3D98D0DADA2B083E',
			component: 'title',
			banner_url: 'https://i.imgur.com/tbZsSVb.jpg',
			icon_url: 'https://i.imgur.com/dINB9cQ.jpg',
			icon_height: '96',
			icon_width: '128',
			id: 1234567,
			name: 'RetroArch',
			type: 'normal',
			contents: {
				content: [
					{
						index: 1,
						title: {
							icon_url: 'https://i.imgur.com/FE9a72R.jpg',
							banner_url: 'https://i.imgur.com/FE9a72R.jpg',
							platform: {
								name: 'Nintendo 3DS Download Only',
								id: 19,
								device: 'CTR',
								category: 8
							},
							publisher: {
								name: 'The Pokémon Company',
								id: 210 // Fake
							},
							display_genre: 'Adventure / Action / Puzzle',
							rating_info: {
								rating_system: {
									name: 'ESRB',
									id: 202
								},
								rating: {
									icons: {
										icon: [
											{
												url: 'https://kanzashi-ctr.cdn.nintendo.net/i/d96122dbb89250582816a67461bf8080f030402720e46032980582bca516778d.jpg',
												type: 'normal'
											},
											{
												url: 'https://kanzashi-ctr.cdn.nintendo.net/i/2d2bc9f60a5a4dbf44175cf1cfe1adc52abbee7ad66ebd6e3978966f84ae9c58.jpg',
												type: 'small'
											}
										]
									},
									name: 'E',
									age: 6,
									id: 2
								}
							},
							star_rating_info: {
								score: 0,
								votes: 0,
								star1: 0,
								star2: 0,
								star3: 0,
								star4: 0,
								star5: 0
							},
							release_date_on_eshop: '2019-12-13',
							retail_sales: false,
							eshop_sales: true,
							demo_available: false,
							aoc_available: false,
							in_app_purchase: false,
							name: 'RetroArch',
							id: 50010000045116,
							product_code: 'CTR-N-A98A'
						}
					},
					{
						index: 2,
						title: {
							icon_url: 'https://i.imgur.com/FUDKnMA.jpg',
							banner_url: 'https://i.imgur.com/FE9a72R.jpg',
							platform: {
								name: 'Nintendo 3DS Download Only',
								id: 19,
								device: 'CTR',
								category: 8
							},
							publisher: {
								name: 'Libretro',
								id: 900 // Fake
							},
							display_genre: 'Emulation / Retro',
							rating_info: {
								rating_system: {
									name: 'ESRB',
									id: 202
								},
								rating: {
									icons: {
										icon: [
											{
												url: 'https://kanzashi-ctr.cdn.nintendo.net/i/d96122dbb89250582816a67461bf8080f030402720e46032980582bca516778d.jpg',
												type: 'normal'
											},
											{
												url: 'https://kanzashi-ctr.cdn.nintendo.net/i/2d2bc9f60a5a4dbf44175cf1cfe1adc52abbee7ad66ebd6e3978966f84ae9c58.jpg',
												type: 'small'
											}
										]
									},
									name: 'E',
									age: 6,
									id: 2
								}
							},
							star_rating_info: {
								score: 0,
								votes: 0,
								star1: 0,
								star2: 0,
								star3: 0,
								star4: 0,
								star5: 0
							},
							release_date_on_eshop: '2019-12-13',
							retail_sales: false,
							eshop_sales: true,
							demo_available: false,
							aoc_available: false,
							in_app_purchase: false,
							name: 'RetroArch - PCSX',
							id: 50010000043091,
							product_code: 'CTR-N-BE4B'
						}
					},
					{
						index: 3,
						title: {
							icon_url: 'https://i.imgur.com/TGvHMVQ.jpg',
							banner_url: 'https://i.imgur.com/FE9a72R.jpg',
							platform: {
								name: 'Nintendo 3DS Download Only',
								id: 19,
								device: 'CTR',
								category: 8
							},
							publisher: {
								name: 'Libretro',
								id: 900 // Fake
							},
							display_genre: 'Emulation / Retro',
							rating_info: {
								rating_system: {
									name: 'ESRB',
									id: 202
								},
								rating: {
									icons: {
										icon: [
											{
												url: 'https://kanzashi-ctr.cdn.nintendo.net/i/d96122dbb89250582816a67461bf8080f030402720e46032980582bca516778d.jpg',
												type: 'normal'
											},
											{
												url: 'https://kanzashi-ctr.cdn.nintendo.net/i/2d2bc9f60a5a4dbf44175cf1cfe1adc52abbee7ad66ebd6e3978966f84ae9c58.jpg',
												type: 'small'
											}
										]
									},
									name: 'E',
									age: 6,
									id: 2
								}
							},
							star_rating_info: {
								score: 0,
								votes: 0,
								star1: 0,
								star2: 0,
								star3: 0,
								star4: 0,
								star5: 0
							},
							release_date_on_eshop: '2019-12-13',
							retail_sales: false,
							eshop_sales: true,
							demo_available: false,
							aoc_available: false,
							in_app_purchase: false,
							name: 'RetroArch - SNES',
							id: 50010000043092,
							product_code: 'CTR-N-BE4C'
						}
					}
				],
				total: 3
			}
		}
	});
});

module.exports = router;