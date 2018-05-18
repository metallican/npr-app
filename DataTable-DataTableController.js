({
	doInit : function(component, event, helper) {
        
		var action1 = component.get("c.getaccs");
             
            
            action1.setCallback( this, function(response) { 
                    component.set("v.records",response.getReturnValue()); 
            });
            $A.enqueueAction(action1);
	}
})