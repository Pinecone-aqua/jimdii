import { FitnessType } from "./types";

export const fitnesses: FitnessType[] = [
	{
		_id: "200",
		name: "Gold's Gym",
		description:
			"Хамгийн сүүлийн үеийн төхөөрөмжтэй, олон улсын стандартын дагуу тусгайлан бэлтгэгдсэн орчинд мэргэжлийн багш, дасгалжуулагч нар зөвхөн таны хүсэл, биеийн онцлогт тохирсон ганцаарчилсан хичээлийг тулж заах бөгөөд итгэмээргүй богино хугацаанд өндөр үр дүнг мэдрүүлэхээр амлаж байна.",
		image: [
			"https://www.goldsgym.mn/images/upload/2016/ub_golds_amenities/DSC06969.jpg",
			"https://www.goldsgym.mn/img/amenitis000.jpg",
			"https://www.goldsgym.mn/images/upload/2016/ub_golds_amenities/DSC06931.jpg",
			"https://www.goldsgym.mn/images/upload/2016/ub_golds_amenities/DSC06962.jpg",
			"http://www.goldsgym.mn/images/upload/2016/ub_golds_amenities/DSC06979.jpg",
			"http://www.goldsgym.mn/images/upload/2016/ub_golds_amenities/DSC06977.jpg",
		],
		price: {
			oneMonth: 480000,
			oneTime: 60000,
			threeMonth: 1000000,
			year: 36000000,
		},
		contact: {
			number: 77111111,
			social: [
				"https://www.facebook.com/GoldsgymULAANBAATAR/",
				"https://twitter.com/GoldsGym",
			],
		},
		address: {
			district: "Bayangol",
			description:
				"2nd floor Ikh Mongol Center, 976 Ulaanbaatar, Bayangol, Ulan Bator",
			coord: [47.905022, 106.943024],
		},
		timetable: {
			monday: "06:00 - 22:30",
			tuesday: "06:00 - 22:30",
			wednesday: "06:00 - 22:30",
			thursday: "06:00 - 22:30",
			friday: "06:00 - 22:30",
			saturday: "08:30 - 22:00",
			sunday: "08:30 - 22:00",
		},
		discount: [
			{
				name: "Gold's Gym early bird",
				discount: 10,
			},
			{
				name: "Partners",
				discount: 10,
			},
			{
				name: "Couple",
				discount: 5,
			},
		],
		spec: {
			wifi: true,
			shower: true,
			parking: true,
		},
	},
	{
		_id: "201",
		name: "GAN Crossfit Mongolia",
		description:
			"КроссФит нь 2000 онд АНУ-д үүсэж хөгжсөн ба олон төрлийн идэхитэй хөдөлгөөнүүдийг өндөр ачаалалд богино хугацаанд гүйцэтгэдэг, хүндийн өргөлт, гимнастик, хөнгөн атлетик-т тулгуурлан тамирчдын хурд, хүч, тэсвэр сорьсон шинэхэн спорт билээ. ",
		image: [
			"https://th.bing.com/th/id/OIP.7mANFkRyBOeeMH8MDEvhpAHaEK?w=310&h=180&c=7&r=0&o=5&pid=1.7",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSofjLsX3Zfuj4ii3J7TSspiXA-U5W4ApdyWg&usqp=CAU",
		],
		price: {
			oneMonth: 250000,
			threeMonth: 600000,
			sixMonth: 1300000,
			oneTime: 20000,
		},
		contact: {
			number: 89036723,
			social: [
				"https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fgan.crossfit%3Ffbclid%3DIwAR3k2xKdoK_J3sqF0xaEciQOvRZE_lD9VcG-oQ3y-51B42S-kD1BHcKQjDQ&h=AT3pam5ihyFBzlaDbo0jWlyeRMMvQOJNmSV9lixBR1ay0hnVk_RbFtHt5JBhLTU_TK_f0w6_v9xDbne9e9u6JtWSc89cn5J6GkrwmJPRO_Barrr6OOH2cJj3izmocICXJrm0aBeLwWiWBFhC80Hg",
			],
		},
		address: {
			district: "Sukhbaatar",
			description: "Gan Sport Center, Ulaanbaatar 16000, Mongolia",
			coord: [47.90472685693586, 106.89839747676696],
		},
		timetable: {
			monday: "06:00 - 00:00",
			tuesday: "06:00 - 00:00",
			wednesday: "06:00 - 00:00",
			thursday: "06:00 - 00:00",
			friday: "06:00 - 00:00",
			saturday: "08:30 - 00:00",
			sunday: "08:30 - 00:00",
		},
		discount: [
			{
				name: "Fiter",
				discount: 10,
			},
		],
		spec: {
			wifi: true,
			shower: true,
			parking: true,
		},
	},
	{
		_id: "202",
		name: "Iron Gym",
		description: "A gym that focuses on strength training",
		image: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
		price: {
			oneMonth: 80,
			oneTime: 150,
			threeMonth: 210,
			sixMonth: 360,
			year: 600,
		},
		contact: {
			number: 12345678,
			email: "info@irongym.com",
			social: ["https://facebook.com/irongym", "https://instagram.com/irongym"],
		},
		address: {
			district: "Bayangol",
			description: "1st floor, building 5, 10th khoroo, Bayangol district",
			coord: [47.908237, 106.923009],
		},
		timetable: {
			monday: "6:00 AM - 10:00 PM",
			tuesday: "6:00 AM - 10:00 PM",
			wednesday: "6:00 AM - 10:00 PM",
			thursday: "6:00 AM - 10:00 PM",
			friday: "6:00 AM - 10:00 PM",
			saturday: "8:00 AM - 8:00 PM",
			sunday: "8:00 AM - 8:00 PM",
		},
		discount: [
			{
				name: "New Year Special",
				discount: 20,
			},
			{
				name: "Student Discount",
				discount: 10,
			},
		],
		spec: {
			wifi: true,
			shower: true,
			parking: true,
		},
	},
	{
		_id: "203",
		name: "Fitness Zone",
		description: "A gym that offers various group fitness classes",
		image: ["https://example.com/image3.jpg", "https://example.com/image4.jpg"],
		price: {
			oneMonth: 60,
			oneTime: 100,
			threeMonth: 165,
			sixMonth: 300,
			year: 500,
		},
		contact: {
			number: 87654321,
			email: "info@fitnesszone.com",
			social: [
				"https://facebook.com/fitnesszone",
				"https://instagram.com/fitnesszone",
			],
		},
		address: {
			district: "Sukhbaatar",
			description: "2nd floor, Sukhbaatar Tower, Sukhbaatar district",
			coord: [47.920409, 106.917144],
		},
		timetable: {
			monday: "7:00 AM - 9:00 PM",
			tuesday: "7:00 AM - 9:00 PM",
			wednesday: "7:00 AM - 9:00 PM",
			thursday: "7:00 AM - 9:00 PM",
			friday: "7:00 AM - 9:00 PM",
			saturday: "9:00 AM - 7:00 PM",
			sunday: "9:00 AM - 7:00 PM",
		},
		discount: null,
		spec: {
			wifi: true,
			shower: true,
			parking: false,
		},
	},
	{
		_id: "204",
		name: "Fitness First",
		description:
			"Premium gym with state-of-the-art equipment and personalized training programs",
		image: [
			"https://example.com/images/fitness-first-1.jpg",
			"https://example.com/images/fitness-first-2.jpg",
			"https://example.com/images/fitness-first-3.jpg",
		],
		price: {
			oneMonth: 150,
			oneTime: 500,
			threeMonth: 400,
			sixMonth: 700,
			year: 1200,
		},
		contact: {
			number: 12345678,
			email: "info@fitnessfirst.com",
			social: [
				"https://facebook.com/fitnessfirst",
				"https://twitter.com/fitnessfirst",
				"https://instagram.com/fitnessfirst",
			],
		},
		address: {
			district: "Bayangol",
			description: "2nd floor, Royal Plaza, Peace Avenue",
			coord: [106.9126, 47.9169],
		},
		timetable: {
			monday: "6:00am - 10:00pm",
			tuesday: "6:00am - 10:00pm",
			wednesday: "6:00am - 10:00pm",
			thursday: "6:00am - 10:00pm",
			friday: "6:00am - 10:00pm",
			saturday: "8:00am - 8:00pm",
			sunday: "8:00am - 8:00pm",
		},
		discount: [
			{
				name: "Early bird",
				discount: 10,
			},
			{
				name: "Student discount",
				discount: 20,
			},
		],
		spec: {
			wifi: true,
			shower: true,
			parking: true,
		},
	},
];
