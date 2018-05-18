({ 
    createSobj: function(component, Sobj) {
            this.upsertSobj(component, Sobj, function(a) { 
        	}); 
},
    
    upsertSobj : function(component, Sobj, callback) {
        var action = component.get("c.saveExpense");
        action.setParams({
            "acc": Sobj
        });
        if (callback) {
            action.setCallback(this, callback);
        }
        $A.enqueueAction(action);
    }

})