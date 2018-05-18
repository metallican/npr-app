({
    doInit : function(component, event, helper) {
        
        var action = component.get("c.getCaseFromId"); 
        action.setCallback( this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.record", response.getReturnValue()); 
                console.log(response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
        
    },
})