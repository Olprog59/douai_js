import {UserModel} from "./user_model.js";


async function userService(nbrResults = 5, lang = "fr") {
	const url = `https://randomuser.me/api/?nat=${lang}&results=${nbrResults}&exc=nat,login,id,registered`;
	const response = await fetch(url);
	const obj = await response.json();
	const results = obj['results']; // Array of objects

	return results.map(oneObj => {
		return objToUserModel(oneObj);
	});
}

function objToUserModel(oneObj) {
	const user = new UserModel();
	user.civilite = oneObj['name']['title'];
	user.prenom = oneObj['name']['first'];
	user.nom = oneObj['name']['last'];
	user.rue = oneObj['location']['street']['number'] + " " + oneObj['location']['street']['name'];
	user.ville = oneObj['location']['city'];
	user.cp = oneObj['location']['postcode'];
	user.pays = oneObj['location']['country'];
	user.email = oneObj['email'];
	user.telFixe = oneObj['phone'];
	user.telMobile = oneObj['cell'];
	user.dateAnniversaire = new Date(oneObj['dob']['date']);
	user.image = oneObj['picture']['large'];
	return user;
}


export {userService}
