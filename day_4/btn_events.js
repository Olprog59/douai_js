function afficher() {
    document.getElementById('message').innerText = 'Voici le message.';
}
function supprimer() {
    document.getElementById('message').innerText = '';
}

const eMess = document.getElementById('event_mess');
const eSupp = document.getElementById('event_supp');

eMess.addEventListener('click', afficher);
eSupp.addEventListener('click', supprimer);

document.getElementById('remove_events').addEventListener('click', function () {
    eMess.removeEventListener('click', afficher);
    eSupp.removeEventListener('click', supprimer);
});
// div contenteditable click
