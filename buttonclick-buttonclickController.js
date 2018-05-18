({
	changelabel : function(component) {
        document.getElementById("htmlp1").innerHTML = 'a';
         
		component.find("button1").set("v.label", component.find("name").get("v.value")); 
        //Stupid attempt: it doesnt work, genius 
		//component.find("button1").set("press", component.getReference("c.alerter"));  
	},
    alerter : function(){
        alert("hi there..");
    }
})