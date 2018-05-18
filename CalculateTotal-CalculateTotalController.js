({
	calculate : function(component, event, helper) {
	var a = component.find("inputOne").get("v.value");
	var b = component.find("inputTwo").get("v.value");
	var c = component.find("inputThree").get("v.value");
	var totals = component.find("totalValue")
    totals.set("v.value", parseInt(a)+parseInt(b)+parseInt(c));
	
	}
})