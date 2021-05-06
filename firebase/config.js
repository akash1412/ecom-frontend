import firebase from "firebase/app";
import "firebase/firestore";
import { uuid } from "uuidv4";

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
				price: "30 USD",
				type: "t-shirt",
			},

			{
				
				title: "Nike SB",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620242357/next-ecom/t-shirts/e8uotji6tb9fanxqd0iz.jpg",
				price: "30 USD",
				type: "t-shirt",
			},

			{
				
				title: "Nike SB",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620242357/next-ecom/t-shirts/e8uotji6tb9fanxqd0iz.jpg",
				price: "30 USD",
				type: "t-shirt",
			},

			{
				
				title: "Nike SB",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620242357/next-ecom/t-shirts/e8uotji6tb9fanxqd0iz.jpg",
				price: "30 USD",
				type: "t-shirt",
			},

			{
				
				title: "Nike SB",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620242357/next-ecom/t-shirts/e8uotji6tb9fanxqd0iz.jpg",
				price: "30 USD",
				type: "t-shirt",
			},
			{
				
				title: "Nike SB",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620242357/next-ecom/t-shirts/e8uotji6tb9fanxqd0iz.jpg",
				price: "30 USD",
				type: "t-shirt",
			},
			{
				
				title: "Nike SB",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620242357/next-ecom/t-shirts/e8uotji6tb9fanxqd0iz.jpg",
				price: "30 USD",
				type: "t-shirt",
			},
			{
				
				title: "Nike SB",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620242357/next-ecom/t-shirts/e8uotji6tb9fanxqd0iz.jpg",
				price: "30 USD",
				type: "t-shirt",
			},
			{
				
				title: "Nike SB",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620242357/next-ecom/t-shirts/e8uotji6tb9fanxqd0iz.jpg",
				price: "30 USD",
				type: "t-shirt",
			},
			{
				
				title: "Nike SB",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620242357/next-ecom/t-shirts/e8uotji6tb9fanxqd0iz.jpg",
				price: "30 USD",
				type: "t-shirt",
			},
	 
	 
	 
 
			{
				
				title: "shoes 1",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243163/next-ecom/shoes/c1xf5zrtuet5toejhdej.jpg",
				price: "30 USD",
				type: "shoes",
			},
			{
				
				title: "shoes 1",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243163/next-ecom/shoes/c1xf5zrtuet5toejhdej.jpg",
				price: "30 USD",
				type: "shoes",
			},
			{
				
				title: "shoes 1",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243163/next-ecom/shoes/c1xf5zrtuet5toejhdej.jpg",
				price: "30 USD",
				type: "shoes",
			},
			{
				
				title: "shoes 1",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243163/next-ecom/shoes/c1xf5zrtuet5toejhdej.jpg",
				price: "30 USD",
				type: "shoes",
			},
			{
				
				title: "shoes 1",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243163/next-ecom/shoes/c1xf5zrtuet5toejhdej.jpg",
				price: "30 USD",
				type: "shoes",
			},
			{
				
				title: "shoes 1",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243163/next-ecom/shoes/c1xf5zrtuet5toejhdej.jpg",
				price: "30 USD",
				type: "shoes",
			},
			{
				
				title: "shoes 1",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243163/next-ecom/shoes/c1xf5zrtuet5toejhdej.jpg",
				price: "30 USD",
				type: "shoes",
			},
			{
				
				title: "shoes 1",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243163/next-ecom/shoes/c1xf5zrtuet5toejhdej.jpg",
				price: "30 USD",
				type: "shoes",
			},
			{
				
				title: "shoes 1",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243163/next-ecom/shoes/c1xf5zrtuet5toejhdej.jpg",
				price: "30 USD",
				type: "shoes",
			},
			{
				
				title: "shoes 1",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243163/next-ecom/shoes/c1xf5zrtuet5toejhdej.jpg",
				price: "30 USD",
				type: "shoes",
			},
			{
				
				title: "shoes 1",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243163/next-ecom/shoes/c1xf5zrtuet5toejhdej.jpg",
				price: "30 USD",
				type: "shoes",
			},

			{
				
				title: "shoes 1",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243184/next-ecom/jerseys/m7zua4is9odfwabwbn7v.jpg",
				price: "30 USD",
				type: "shoes",
			},
			{
				
				title: "shoes 1",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243184/next-ecom/jerseys/m7zua4is9odfwabwbn7v.jpg",
				price: "30 USD",
				type: "shoes",
			},
			{
				
				title: "shoes 1",

				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243184/next-ecom/jerseys/m7zua4is9odfwabwbn7v.jpg",
				
				price: "30 USD",
				type: "shoes",
			},
			{
				
				title: "jersey 1",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243184/next-ecom/jerseys/m7zua4is9odfwabwbn7v.jpg",
				price: "30 USD",
				type: "jersey",
			},
			{
				
				title: "jersey 1",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243184/next-ecom/jerseys/m7zua4is9odfwabwbn7v.jpg",
				price: "30 USD",
				type: "jersey",
			},
			{
				
				title: "jersey 1",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243184/next-ecom/jerseys/m7zua4is9odfwabwbn7v.jpg",
				price: "30 USD",
				type: "jersey",
			},
			{
				
				title: "jersey 1",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243184/next-ecom/jerseys/m7zua4is9odfwabwbn7v.jpg",
				price: "30 USD",
				type: "jersey",
			},
			{
				
				title: "jersey 1",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243184/next-ecom/jerseys/m7zua4is9odfwabwbn7v.jpg",
				price: "30 USD",
				type: "jersey",
			},
			{
				
				title: "jersey 1",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243184/next-ecom/jerseys/m7zua4is9odfwabwbn7v.jpg",
				price: "30 USD",
				type: "jersey",
			},
			{
				
				title: "jersey 1",
				coverImg:
					"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1620243184/next-ecom/jerseys/m7zua4is9odfwabwbn7v.jpg",
				price: "30 USD",
				type: "jersey",
			},
	 
];
const DB_STORE = firebase.firestore();

const Upload = async () => {
	data.forEach(
		async d => await firebase.firestore().collection("store").add(d)
	);
};

export { DB_STORE, Upload };
