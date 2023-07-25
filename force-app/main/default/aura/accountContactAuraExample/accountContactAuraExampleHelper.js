({
    getAccountName : function(component) {
        var contactId = component.get("v.recordId");
        var action = component.get("c.getAccountName");
        action.setParams({
            "contactId": contactId
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.accountName", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})
