import UserModel from "./user_model.js";

const toUserModel = (r) => {
	const user = new UserModel();
	user.gender = r["gender"];
	user.titleName = r["name"]["title"];
	user.firstName = r["name"]["first"];
	user.lastName = r["name"]["last"];
	user.street = r["location"]["street"]["number"] + " " + r["location"]["street"]["name"];
	user.city = r["location"]["city"];
	user.country = r["location"]["country"];
	user.postcode = r["location"]["postcode"];
	user.email = r["email"];
	user.phone = r["phone"];
	user.cell = r["cell"];
	user.pictureLarge = r["picture"]["large"];
	user.pictureMedium = r["picture"]["medium"];
	return user;
}

export const getUsers = async (nbr = 50, lang = "fr") => {
	const response = await fetch(`https://randomuser.me/api/?nat=${lang}&results=${nbr}&inc=gender,name,location,email,phone,cell,picture`);
	console.log(response);
	const res = await response.json();
	return res['results'].map(r => {
		return toUserModel(r);
	})
}
