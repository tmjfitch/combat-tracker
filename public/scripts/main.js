var combatantRowTemplate = document.getElementsByClassName('combatant_row')[0];
combatantRowTemplate = combatantRowTemplate.parentNode.removeChild(combatantRowTemplate);

var effectRowTemplate = document.getElementsByClassName('effect_row')[0];
effectRowTemplate = effectRowTemplate.parentNode.removeChild(effectRowTemplate);

var combatants, areasOfEffect, encounters, currentEncounter;

if (localStorage.combatants) {
	combatants = JSON.parse(localStorage.combatants);
} else {
	combatants = [];
}

if (localStorage.areasOfEffect) {
	areasOfEffect = JSON.parse(localStorage.areasOfEffect);
} else {
	areasOfEffect = [];
}

if (localStorage.encounters) {
	encounters = JSON.parse(localStorage.encounters);
} else {
	encounters = [];
}

if (localStorage.currentEncounter) {
	currentEncounter = JSON.parse(localStorage.currentEncounter);
	el = document.getElementById('encounter_title');
	var index = el.className.indexOf('new');
	el.className = el.className.slice(0, index) + el.className.slice(index + 3);
	el.innerHTML = currentEncounter.name;	
} else {
	currentEncounter = {};
	encounters.push(currentEncounter);
}

document.getElementById('encounter_title').onclick = function () {
	el = document.getElementById('encounter_title');
	if (el.className.indexOf('new') > -1) {
		el.innerHTML = '';

		var index = el.className.indexOf('new');
		el.className = el.className.slice(0, index) + el.className.slice(index + 3);
	}
};

document.getElementById('encounter_title').addEventListener('input', function (event) {
	currentEncounter.name = event.currentTarget.innerHTML;
	localStorage.currentEncounter = JSON.stringify(currentEncounter);
	localStorage.encounters = JSON.stringify(encounters);
});

var rowbuttons = document.getElementsByClassName('new_row');
rowbuttons[0].addEventListener('click', function (event) {
	var newRow = combatantRowTemplate.cloneNode(true);
	document.getElementById('combatant_table_body').appendChild(newRow);
});

rowbuttons[1].addEventListener('click', function (event) {
	var newRow = effectRowTemplate.cloneNode(true);
	document.getElementById('effect_table_body').appendChild(newRow);
});