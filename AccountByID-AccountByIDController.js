({
    doInit : function(component, event, helper) {
        
        var action = component.get("c.AccById"); 
                console.log(component.get("v.accID") );
      action.setParams({ "accountid": component.get("v.accID") });
        action.setCallback( this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.ac", response.getReturnValue()); 
                console.log(response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
        
    },
})