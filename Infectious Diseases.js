function Button (){
		document.getElementById("Diagnose").style.visibility = "visible"
	
}
function Fever() {
	if ((!document.getElementById("Fever.0").checked
		&& !document.getElementById("Fever.1").checked
		&& !document.getElementById("Fever.2").checked
		&& !document.getElementById("Fever.3").checked
		&& !document.getElementById("Fever.4").checked)
		|| (!document.getElementById("Intoxication.0").checked
		    && !document.getElementById("Intoxication.1").checked
		    && !document.getElementById("Intoxication.2").checked
		    && !document.getElementById("Intoxication.3").checked)
		|| (!document.getElementById("Nausea.0").checked
		    && !document.getElementById("Nausea.1").checked)
		|| (!document.getElementById("Stool.0").checked
			&& !document.getElementById("Stool.1").checked
			&& !document.getElementById("Stool.2").checked
			&& !document.getElementById("Stool.3").checked
			&& !document.getElementById("Stool.4").checked)
		|| (!document.getElementById("Vomiting.0").checked
		    && !document.getElementById("Vomiting.1").checked
		    && !document.getElementById("Vomiting.2").checked
		    && !document.getElementById("Vomiting.3").checked
		    && !document.getElementById("Vomiting.4").checked
		    && !document.getElementById("Vomiting.5").checked)
		|| (!document.getElementById("Abdominal.pain.0").checked
			&& !document.getElementById("Abdominal.pain.1").checked
			&& !document.getElementById("Abdominal.pain.2").checked
			&& !document.getElementById("Abdominal.pain.3").checked)
		|| (!document.getElementById("Diarrhea.0").checked
			&& !document.getElementById("Diarrhea.1").checked) 
		|| (!document.getElementById("Dehydration.0").checked
			&& !document.getElementById("Dehydration.1").checked
			&& !document.getElementById("Dehydration.2").checked
			&& !document.getElementById("Dehydration.3").checked)){
		alert("Пожалуйста, выберите все Ваши симптомы");
		/*document.getElementById("Diagnose").textContent = "Пожалуйста, выберите все Ваши симптомы";
		document.getElementById("Diagnose").style.visibility = "visible";*/
	}
	else{
	if (document.getElementById("Fever.2").checked 
		&& document.getElementById("Intoxication.2").checked 
		&& document.getElementById("Stool.0").checked 
		&& document.getElementById("Nausea.1").checked 
		&& document.getElementById("Vomiting.5").checked 
		&& document.getElementById("Abdominal.pain.1").checked 
		&& document.getElementById("Diarrhea.1").checked
		&& (document.getElementById("Dehydration.0").checked
		|| document.getElementById("Dehydration.1").checked
		|| document.getElementById("Dehydration.2").checked)) {
		document.getElementById("Diagnose").textContent = "На основании выбранных симптомов, Ваш предполагаемый диагноз - Ротавирусная инфекция";
		document.getElementById("Diagnose").style.visibility = "visible";
		
	    }
	else{
		if (document.getElementById("Fever.1").checked 
		    && document.getElementById("Intoxication.1").checked 
		    && document.getElementById("Stool.1").checked 
		    && document.getElementById("Nausea.1").checked 
		    && document.getElementById("Vomiting.2").checked 
		    && document.getElementById("Abdominal.pain.2").checked 
		    && document.getElementById("Diarrhea.1").checked
		    && document.getElementById("Dehydration.0").checked) {
		    document.getElementById("Diagnose").textContent = "На основании выбранных симптомов, Ваш предполагаемый диагноз - Норовирусная инфекция";
		    document.getElementById("Diagnose").style.visibility = "visible"; }
	    else {
		    if ( (document.getElementById("Fever.3").checked || document.getElementById("Fever.2").checked)
		        && document.getElementById("Intoxication.3").checked 
		        && document.getElementById("Stool.2").checked 
		        && (document.getElementById("Nausea.0").checked
		        	|| document.getElementById("Nausea.1").checked) 
		        && !document.getElementById("Vomiting.2").checked
		        && !document.getElementById("Vomiting.3").checked 
     	        && !document.getElementById("Vomiting.4").checked 
	            && !document.getElementById("Vomiting.5").checked 
		        && document.getElementById("Abdominal.pain.3").checked 
		        && document.getElementById("Diarrhea.1").checked
		        && document.getElementById("Dehydration.0").checked) {
		        document.getElementById("Diagnose").textContent = "На основании выбранных симптомов, Ваш предполагаемый диагноз - Шигеллёз";
		        document.getElementById("Diagnose").style.visibility = "visible"; }
		    else {
		        if (document.getElementById("Intoxication.3").checked
			        && !document.getElementById("Fever.0").checked 
			        && !document.getElementById("Fever.1").checked 
		        	// && !document.getElementById("Fever.2").checked  
	            	&& document.getElementById("Stool.3").checked 
	            	&& document.getElementById("Nausea.1").checked 
	            	&& document.getElementById("Vomiting.3").checked 
	            	&& document.getElementById("Abdominal.pain.1").checked 
	            	&& document.getElementById("Diarrhea.1").checked
	            	&& !document.getElementById("Dehydration.3").checked) {
		            document.getElementById("Diagnose").textContent = "На основании выбранных симптомов, Ваш предполагаемый диагноз - Сальмонеллёз";
		            document.getElementById("Diagnose").style.visibility = "visible"; }
	            else{
	            	if (document.getElementById("Fever.0").checked 
	                	&& document.getElementById("Intoxication.0").checked 
	                	&& document.getElementById("Stool.4").checked 
	                	&& document.getElementById("Nausea.0").checked 
	                	&& document.getElementById("Vomiting.4").checked 
	                	&& document.getElementById("Abdominal.pain.0").checked 
	                	&& document.getElementById("Diarrhea.1").checked) {
		                document.getElementById("Diagnose").textContent = "На основании выбранных симптомов, Ваш предполагаемый диагноз - Холера"; 
		                document.getElementById("Diagnose").style.visibility = "visible";}
	                else{
	                	document.getElementById("Diagnose").style.visibility = "visible";
		                document.getElementById("Diagnose").textContent = "Предоставленной информации недостаточно для постановки диагноза типичных форм указанных выше заболеваний, проведите пожалуйста лабораторные анализы";}
		            }

	}
	}
	}
}
}
