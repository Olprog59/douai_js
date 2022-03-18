import {userService} from "./user_service.js";


userService(50)
	.then( userList => {
		let html = userList.map(user => {
			return `
<article class="user">
	<figure>
		<img src="${user.image}" alt="${user.prenom} ${user.nom}">
	</figure>
	<div class="nom">
		<p>${user.civilite} ${user.prenom} ${user.nom.toUpperCase()}</p>
		<p>Date d'anniversaire : ${user.dateAnniversaire.toLocaleDateString("fr")}</p>
	</div>
	<div class="adresse">
		<p>Rue : ${user.rue}</p>
		<p>Ville : ${user.ville}</p>
		<p>Code Postal : ${user.cp}</p>
		<p>Pays : ${user.pays}</p>
	</div>
	<div class="coord">
		<p>Email : ${user.email}</p>
		<p>Fixe : ${user.telFixe}</p>
		<p>Mobile : ${user.telMobile}</p>
	</div>
</article>`;
		});
		
		document.getElementById('userList').innerHTML = html.join('');
	});
