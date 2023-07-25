({
    handleName : function(component) {
        var customName = component.find('name-id').get('v.value');
        component.set('v.name', customName);
    }
})
