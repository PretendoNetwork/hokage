const router = require('express').Router();

router.get('/ws/:region/title/:title', (request, response) => {
	response.json({
		title: {
			formal_name: 'RetroArch',
			description: 'Play all the cores',
			genres: {
				genre: [
					{
						name: 'RPG',
						id: 8
					},
					{
						name: 'Adventure',
						id: 4
					}
				],
				length: 2
			},
			keywords: {
				keyword: [
					'RetroArch',
					'Retro',
					'Libretro',
					'Emulation',
					'Emulator'
				]
			},
			languages: {
				'language': [
					{
						'iso_code': 'en',
						'name': 'English'
					}
				]
			},
			number_of_players: '1 player',
			disclaimer: 'Please no piracy',
			copyright: {
				text: '©2019 Libretro'
			},
			screenshots: {
				screenshot: [
					{
						image_url: [
							{
								value: 'https://kanzashi-ctr.cdn.nintendo.net/i/52e5793e7407700b2ae1b1e7860a574dc2a9fdc17506f1d862cab7e69b76a210.jpg',
								type: 'upper'
							},
							{
								value: 'https://kanzashi-ctr.cdn.nintendo.net/i/1d1deaa941f0f4c3100856e11bfa85b7d65629faa2241d492f3016ba7a32c322.jpg',
								type: 'lower'
							}
						]
					},
					{
						image_url: [
							{
								value: 'https://kanzashi-ctr.cdn.nintendo.net/i/ad77f89c7b3f489fb0665a5a707716134ff2d2995c18c10ec01f92aa19e2dec7.jpg',
								type: 'upper'
							},
							{
								value: 'https://kanzashi-ctr.cdn.nintendo.net/i/f564845c9291737524b1a72ee7633f99ed0fc5bbd63db2275c55878115299071.jpg',
								type: 'lower'
							}
						]
					},
					{
						image_url: [
							{
								value: 'https://kanzashi-ctr.cdn.nintendo.net/i/00966e725af5c757dd87f3418c132173212b7e23c6249a6ae4787f64c6697ea4.jpg',
								type: 'upper'
							},
							{
								value: 'https://kanzashi-ctr.cdn.nintendo.net/i/1f37215c8955325113f3212d654a9ba45f5837c88bf494a71f8a379a76837a25.jpg',
								type: 'lower'
							}
						]
					}
				]
			},
			preference: {
				target_player: {
					everyone: 72,
					gamers: 28
				},
				play_style: {
					casual: 78,
					intense: 22
				}
			},
			ticket_available: false,
			data_size: 672256,
			download_code_sales: false,
			download_card_sales: {
				available: false
			},
			name: 'RetroArch',
			thumbnails: {
				thumbnail: [
					{
						url: 'https://kanzashi-ctr.cdn.nintendo.net/i/92d1948a72c384186a0f2af81eca63aad67b2ecd7f01b76d09e8fca596324a0b.jpg',
						height: 112,
						width: 112,
						type: 'small'
					},
					{
						url: 'https://kanzashi-ctr.cdn.nintendo.net/i/3b03e6c9f64590ef17cb38fb4ba795562bc1963a0382a6d7699c4bf9799466f3.jpg',
						height: 112,
						width: 112,
						type: 'small'
					},
					{
						url: 'https://kanzashi-ctr.cdn.nintendo.net/i/ab3c38dcaa92e384250a2397a03bc3a28322f1af6c71e0f806ccdc9557b9f516.jpg',
						height: 112,
						width: 112,
						type: 'small'
					}
				]
			},
			id: request.params.title,
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
			product_code: 'CTR-N-BE4A',
			icon_url: 'https://i.imgur.com/dINB9cQ.jpg',
			banner_url: 'https://i.imgur.com/tbZsSVb.jpg',
			display_genre: 'RPG / Adventure',
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
				},
				descriptors: {
					descriptor: [
						{
							name: 'Mild Cartoon Violence'
						},
						{
							name: 'Simulated Gambling'
						}
					]
				}
			},
			star_rating_info: {
				'score': 4.85,
				'votes': 2080,
				'star1': 20,
				'star2': 22,
				'star3': 58,
				'star4': 289,
				'star5': 1691
			},
			release_date_on_eshop: '2019-12-14',
			retail_sales: false,
			eshop_sales: true,
			web_sales: true,
			demo_available: false,
			aoc_available: false,
			in_app_purchase: false,
			top_image: {
				type: 'screenshot',
				url: 'https://i.imgur.com/dINB9cQ.jpg'
			},
			new: false,
			public: true
		}
	});
});

module.exports = router;