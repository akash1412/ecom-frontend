import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBuPgyzPs5OLujEgNg6vv9sbxLkayTkPNM",
	authDomain: "next-ecom.firebaseapp.com",
	projectId: "next-ecom",
	storageBucket: "next-ecom.appspot.com",
	messagingSenderId: "420845044480",
	appId: "1:420845044480:web:2d96f35f38db6e6577e9e5",
};
// Initialize Firebase

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
} else {
	firebase.app(); // if already initialized, use that one
}

const data = [
	{
		title: "Nike SB",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620242357/next-ecom/t-shirts/e8uotji6tb9fanxqd0iz.jpg",
		price: "30 ",
		type: "t-shirt",
	},

	{
		title: "Nike SB",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620242362/next-ecom/t-shirts/donhwmb45od545c4krru.jpg",
		price: "100 ",
		type: "t-shirt",
	},

	{
		title: "Nike Sportswear",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620242351/next-ecom/t-shirts/dckifbtn4zmls9auesjd.jpg",
		price: "60 ",
		type: "t-shirt",
	},

	{
		title: "Nike SB",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620242347/next-ecom/t-shirts/kt170ojzszwkzzf0pcje.jpg",
		price: "30 ",
		type: "t-shirt",
	},

	{
		title: "Nike Dri-FIT",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620242331/next-ecom/t-shirts/xmdkclzshbdd09xrr4hr.jpg",
		price: "80 ",
		type: "t-shirt",
	},
	{
		title: "Nike X",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620242340/next-ecom/t-shirts/c0cpyqamlptw5aarp9lx.jpg",
		price: "90 ",
		type: "t-shirt",
	},
	{
		title: "Nike B",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620242328/next-ecom/t-shirts/cyztjnajiapnldwizyex.jpg",
		price: "28 ",
		type: "t-shirt",
	},
	{
		title: "Nike Rise",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620242323/next-ecom/t-shirts/cifbwspi0j1j3aydd0wk.jpg",
		price: "30 ",
		type: "t-shirt",
	},
	{
		title: "Nike Pro",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620242298/next-ecom/t-shirts/i1osnl3q2k2gg2jv738h.jpg",
		price: "55 ",
		type: "t-shirt",
	},
	{
		title: "Nike Dri-FIT Vapor",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620242239/next-ecom/t-shirts/foxchbheegan3xfjykov.jpg",
		price: "90 ",
		type: "t-shirt",
	},

	{
		title: "shoes 1",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243163/next-ecom/shoes/c1xf5zrtuet5toejhdej.jpg",
		price: "30 ",
		type: "shoes",
	},
	{
		title: "shoes 1",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243163/next-ecom/shoes/klp9itun1ymjmjuhhtfu.jpg",
		price: "30 ",
		type: "shoes",
	},
	{
		title: "shoes 1",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243163/next-ecom/shoes/dioozy5jyjhxqzfnwafq.jpg",
		price: "30 ",
		type: "shoes",
	},
	{
		title: "shoes 1",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243162/next-ecom/shoes/qchhnqpjv4ekfvj9b90o.jpg",
		price: "30 ",
		type: "shoes",
	},
	{
		title: "shoes 1",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243162/next-ecom/shoes/vjzmusddv0ng7341wofb.jpg",
		price: "30 ",
		type: "shoes",
	},
	{
		title: "shoes 1",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243162/next-ecom/shoes/ne1vh30nkdoscqleypgh.jpg",
		price: "30 ",
		type: "shoes",
	},
	{
		title: "shoes 1",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243162/next-ecom/shoes/muuijzgd9bl0qt7dklqd.jpg",
		price: "30 ",
		type: "shoes",
	},
	{
		title: "shoes 1",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243162/next-ecom/shoes/w5xeyuhmqspwkcfplotz.jpg",
		price: "30 ",
		type: "shoes",
	},
	{
		title: "shoes 1",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243162/next-ecom/shoes/eou2mjfkf8mfzczngwim.jpg",
		price: "30 ",
		type: "shoes",
	},
	{
		title: "shoes 1",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243162/next-ecom/shoes/s2fvcdtjezncxhv355jn.jpg",
		price: "30 ",
		type: "shoes",
	},
	{
		title: "shoes 1",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243163/next-ecom/shoes/c1xf5zrtuet5toejhdej.jpg",
		price: "30 ",
		type: "shoes",
	},

	{
		title: "shoes 1",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243162/next-ecom/shoes/kdbpuglnf4dpghfvokev.jpg",
		price: "30 ",
		type: "shoes",
	},

	{
		title: "jersey 1",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243184/next-ecom/jerseys/m7zua4is9odfwabwbn7v.jpg",
		price: "30 ",
		type: "jersey",
	},
	{
		title: "jersey 1",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243184/next-ecom/jerseys/kwmr7zjhld24vrqpi9sn.jpg",
		price: "30 ",
		type: "jersey",
	},
	{
		title: "jersey 1",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243184/next-ecom/jerseys/ashtstrfkhtuqqbpjhjv.jpg",
		price: "30 ",
		type: "jersey",
	},
	{
		title: "jersey 1",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243184/next-ecom/jerseys/ugh0kbirpq1eaj9buxyo.jpg",
		price: "30 ",
		type: "jersey",
	},
	{
		title: "jersey 1",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243183/next-ecom/jerseys/yluxoomccyangrkaw2id.jpg",
		price: "30 ",
		type: "jersey",
	},
	{
		title: "jersey 1",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243183/next-ecom/jerseys/j2i3murh68bscawapaig.jpg",
		price: "30 ",
		type: "jersey",
	},
	{
		title: "jersey 1",
		coverImg:
			"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243183/next-ecom/jerseys/dtkteoaxa71dajmn3lph.jpg",
		price: "30 ",
		type: "jersey",
	},
];
const DB_STORE = firebase.firestore();

const auth = firebase.auth();

const Upload = async () => {
	data.forEach(
		async d => await firebase.firestore().collection("store").add(d)
	);
};

export { DB_STORE, auth };
