({
	createSobj : function(component, event, callback) { 
    var nameval = component.find("SobjName");
    var name = nameval.get("v.value");
    if (name==''){
        nameval.setValid("v.value", false);
        nameval.addErrors("v.value", [{message:"Enter a string"}]);
    }
    else {
        nameval.setValid("v.value", true);
        var newSobj= component.get("v.newSobj");
        var action = component.get("c.saveExpense");
        action.setParams({
            "acc": newSobj
        }); 
        action.setCallback(this, function(response) { 
          //      component.set("v.newSobj", response.getReturnValue());
         //      alert(v.newSobj.Id); 
         console.log(response.getReturnValue());
        });
        $A.enqueueAction(action);
     //   helper.createSobj(component, newSobj);
        }
},
})