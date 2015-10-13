$(function() {
	var refresh = function() {
		$("#info").html(toonzy.pickType());
		$("#trait").html(toonzy.pickTrait());
		$("#niche").html(toonzy.pickNiche());
		$("#str .stat-value").html(toonzy.rollStat());
		$("#vit .stat-value").html(toonzy.rollStat());
		$("#acc .stat-value").html(toonzy.rollStat());
		$("#spd .stat-value").html(toonzy.rollStat());
		$("#int .stat-value").html(toonzy.rollStat());
		$("#chm .stat-value").html(toonzy.rollStat());
		$("#per .stat-value").html(toonzy.rollStat());

		$("#str .stat-bonus").html(toonzy.bonusLookup(parseInt($("#str .stat-value").html(), 10)));
		$("#vit .stat-bonus").html(toonzy.bonusLookup(parseInt($("#vit .stat-value").html(), 10)));
		$("#acc .stat-bonus").html(toonzy.bonusLookup(parseInt($("#acc .stat-value").html(), 10)));
		$("#spd .stat-bonus").html(toonzy.bonusLookup(parseInt($("#spd .stat-value").html(), 10)));
		$("#int .stat-bonus").html(toonzy.bonusLookup(parseInt($("#int .stat-value").html(), 10)));
		$("#chm .stat-bonus").html(toonzy.bonusLookup(parseInt($("#chm .stat-value").html(), 10)));
		$("#per .stat-bonus").html(toonzy.bonusLookup(parseInt($("#per .stat-value").html(), 10)));

		$("#initiative .stat-value").html(parseInt($("#spd .stat-bonus").html().replace(/\s/g, ''),10));
		$("#movement .stat-value").html(6 + parseInt($("#spd .stat-bonus").html().replace(/\s/g, ''),10));
		$("#defense .stat-value").html(parseInt($("#spd .stat-value").html(),10) + parseInt($("#spd .stat-bonus").html().replace(/\s/g, ''),10));
		$("#health .stat-value").html(parseInt($("#vit .stat-value").html(),10) + parseInt($("#vit .stat-bonus").html().replace(/\s/g, ''),10));
		$("#damage .stat-value").html(parseInt($("#str .stat-bonus").html().replace(/\s/g, ''),10));
		$("#whack .stat-value").html(parseInt($("#acc .stat-bonus").html().replace(/\s/g, ''),10));
	}

	$("#generate-character").click(function(){
		refresh();
	});

	refresh();
});