//setta alle date di andata e ritorno come valore di default la data corrente
$(document).ready(function(){ 
	
	var now = new Date();
	 
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);

    var today = now.getFullYear()+"-"+(month)+"-"+(day) ;


   $('#datPartenza').val(today);
   $('#datRitorno').val(today);
   
   
   
 //In base al click sul radio button, abilito o disabilito la data di ritorno
$('#rad1').click(function(){
$('input[name="datRitorno"]').attr('disabled',false);

});


$('#rad2').click(function(){
$('#datRitorno').val(today); 
$('input[name="datRitorno"]').attr('disabled',true);

});


//compare menu per aggiungere i posti
$("#add-posti").click(function(){
$(".menu-posti").toggle();
  });
	
	//menu login compare al click
	$(".l").click(function(){
$("#menu").toggle();
  });
	
	//navbar trasparente e solida
	var fixmeTop = $('#sconto').offset().top;
$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();
    if (currentScroll >= fixmeTop) {
        $('nav').css({backgroundColor:'#34344c'});
    } else  {
        $('nav').css({backgroundColor:'rgba(0,0,0,0)'});
    }
	
	
});
	
})

//controllo min e max della data di partenza e ritorno
	var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
    var traUnAnno= now.getFullYear()+1;
    var massimo = traUnAnno+"-"+(month)+"-"+(day) ;
	document.getElementById('datPartenza').min =today;
	document.getElementById('datPartenza').max =massimo;
    document.getElementById('datRitorno').max =massimo;
    function dat(){

    	var min=  document.getElementById('datPartenza').value;
    	document.getElementById('datRitorno').min =min;
	
    }

//incremento e decremento posti di adulti e bambini tramite pulsanti
	function incrementAdult(){
		var val = document.getElementById("adultNumber").value;
		if(val<20)
			val++;
		document.getElementById("adultNumber").value = val;
	}
	
	function decrementAdult(){
		var val = document.getElementById("adultNumber").value;
		if(val>1)
			val--;
		else
			val = 1;
		document.getElementById("adultNumber").value = val;
	}
		function incrementChild(){
		var val = document.getElementById("childNumber").value;
		if(val<20)
			val++;
		document.getElementById("childNumber").value = val;
	}
	
	function decrementChild(){
		var val = document.getElementById("childNumber").value;
		if(val>0)
			val--;
		else
			val = 0;
		document.getElementById("childNumber").value = val;
	}
