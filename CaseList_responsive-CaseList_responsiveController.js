({
   //Fetch the accounts from the Apex controller
  loadCases: function(component) {
    var action = component.get("c.getcases");

    //Set up the callback
    var self = this;
    action.setCallback(this, function(actionResult) {
        component.set("v.cases", actionResult.getReturnValue());         
        console.log(actionResult.getReturnValue());
    });
    $A.enqueueAction(action);
  }   
})