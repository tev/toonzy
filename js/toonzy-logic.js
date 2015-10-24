var toonzy = toonzy || {};

toonzy.roller = function(dataSet) {
	return dataSet[Math.floor(Math.random()*dataSet.length)];
}

toonzy.rangeRoller = function(dataSet) {
  var d100 = Math.floor( 1 + (100 * Math.random())),
  	  range = dataSet.length,
  	  type = '';
  for (i = 0; i < range; i++) {
    if ((d100 >= dataSet[i].lower) && (d100 <= dataSet[i].upper)) {
      return dataSet[i].type;
    }
  }
  console.log(d100 + " didn't match anything in " + dataSet);
}

toonzy.coinFlip = function(flipString) {
	if (typeof flipString === 'string') {
		var coinFlipRegEx = /([\w ]*) or ([\w ]*) \(Flip a coin\)/;
		coinFlip = flipString.match(coinFlipRegEx);
		if (coinFlip != null) {
			flipString = flipString.replace(coinFlipRegEx,'');
			if (flipString.trim().length > 0) {
				flipString = flipString + ': ' + coinFlip[Math.floor( 1 + (2 * Math.random()))];
			} else {
				flipString = coinFlip[Math.floor( 1 + (2 * Math.random()))];
			}
			
		}
	}
	return flipString;
}

toonzy.tableLookup = function(tableString) {
	var subTableRegEx = /Roll on ([\w ]*) Table/;
	var lookup = tableString.match(subTableRegEx);
	if (lookup != null) {
		lookupKey = lookup[1].toLowerCase().replace(/\s/g, '');
		if (lookupKey === 'charactertype') {
			tableString = tableString + ': ' + toonzy.pickType();
		} else {
			var newSubtype = toonzy.roller(toonzy.data.character[lookupKey]);
			newSubtype = toonzy.coinFlip(newSubtype);
			newSubtype = toonzy.tableLookup(newSubtype);
			tableString = tableString.replace(subTableRegEx,'');
			if (tableString.trim().length > 0) {
				tableString = tableString + ': ' + newSubtype;
			} else {
				tableString = newSubtype;
			}
			
		}
	};

	return tableString;
}

toonzy.pickType = function() {
	var superType = toonzy.rangeRoller(toonzy.data.character.charactertype), subType;
	switch (superType) {
  		case 'Human':
  			subType = toonzy.roller(toonzy.data.character.human.color) + ', ' + toonzy.roller(toonzy.data.character.human.physical) + ', ' + toonzy.roller(toonzy.data.character.human.physical) + ' human';
    		break;
    	case 'Monstrous':
    		var monstrousBody, monstrousArms, monstrousEyes, monstrousHeads, monstrousSkin;
    		subType = 'build monster';
    		monstrousBody = toonzy.roller(toonzy.data.character.monstrousbody);
    		if (monstrousBody === 'Blob or Amoeba (Flip a coin)') {
    			subType = toonzy.coinFlip(subType);
    		} else {
    			monstrousArms = toonzy.rangeRoller(toonzy.data.character.monstrousarms);
    			monstrousArms = toonzy.coinFlip(monstrousArms);
    			monstrousEyes = toonzy.rangeRoller(toonzy.data.character.monstrouseyes);
    			monstrousHeads = toonzy.rangeRoller(toonzy.data.character.monstrousheads);
    			subType = monstrousBody + ' monster, with ' + monstrousArms + ' arms, ' + monstrousEyes + ' eyes, ' + monstrousHeads + ' heads'; 
    		}
    		monstrousSkin = toonzy.roller(toonzy.data.character.monstrousskin);
    		subType = subType + ' and ' + monstrousSkin + ' skin';
    		break;
    	default:
    		subType = toonzy.roller(toonzy.data.character[superType.toLowerCase().replace(/\s/g, '')]);
    		subType = toonzy.coinFlip(subType);
  			subType = toonzy.tableLookup(subType);
	}

	//return superType + ': ' + subType;
	return subType;
}

toonzy.pickTrait = function() {
	var traits = toonzy.roller(toonzy.data.character.personalitytraits);
	traits = toonzy.coinFlip(traits);
  	traits = toonzy.tableLookup(traits);
	return traits;
}

toonzy.pickNiche = function() {
	var niche = toonzy.roller(toonzy.data.character.niche);
	niche = toonzy.coinFlip(niche);
  	niche = toonzy.tableLookup(niche);
	return niche;
}

toonzy.rollStat = function() {
	var total = 0;
	for(var d = 0; d < 5; d++) {
		total = total + Math.floor( 1 + (4 * Math.random()));
	}
	return total;
}

toonzy.bonusLookup = function(statValue) {
	var bonus;
	if (statValue < 9) { bonus = 0; } else
	if (statValue < 14) { bonus = 1; } else
	if (statValue < 17) { bonus = 2; } else
	if (statValue < 19) { bonus = 3; } else
	if (statValue < 20) { bonus = 4; } else
	{ bonus = 5; }

	return '+ ' + bonus;
}