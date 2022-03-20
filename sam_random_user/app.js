import {getUsers} from "./user_service.js";

const usersSection = document.getElementById("users");

getUsers().then(r => {
	usersSection.innerHTML = toHtml(r).join('');
})

function toHtml(users) {
	return users.map(user => {
		return `
<div class="user">
	<figure><img src="${user.pictureLarge}" alt="${user.firstName} ${user.lastName}"></figure>
	<div class="name">
		<p>Mon nom est </p>
		<p>${user.titleName} ${user.firstName} ${user.lastName}</p>
	</div>
	<div class="hidden">
		<div class="address">
			<p><span>Rue :</span> <span>${user.street}</span></p>
			<p><span>Ville :</span> <span>${user.city}</span></p>
			<p><span>Code Postal :</span> <span>${user.postcode}</span></p>
			<p><span>Pays :</span> <span>${user.country}</span></p>
		</div>
		<div class="phone">
			<p><span>Téléphone :</span> <span>${user.phone}</span></p>
			<p><span>Mobile :</span> <span>${user.cell}</span></p>
		</div>
	</div>
</div>`;
	})
}
