({
    getContacts : function(component) {
        var accountId = component.get("v.recordId");
        var action = component.get("c.getContacts");
        action.setParams({
            "accountId": accountId
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.contacts", response.getReturnValue());
                component.set("v.columns", [
                    {label: 'Nombre', fieldName: 'Name', type: 'text'},
                    {label: 'Email', fieldName: 'Email', type: 'email'},
                    {label: 'Teléfono', fieldName: 'Phone', type: 'phone'}
                ]);
            }
        });
        $A.enqueueAction(action);
    }
})
