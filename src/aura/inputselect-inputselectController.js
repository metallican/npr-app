({
    doInit : function(cmp) {
        // Initialize input select options
        var opts = [
            { "class": "optionClass", label: "Option1", value: "opt1", selected: "true"
            },
            { "class": "optionClass", label: "Option2", value: "opt2" },
            { "class": "optionClass", label: "Option3", value: "opt3" }
        ];
        cmp.find("InputSelectDynamic").set("v.options", opts);
    },
    onSingleSelectChange: function(cmp, evt) {
        var selectCmp = cmp.find("InputSelectSingle");
        resultCmp = cmp.find("singleResult");
        resultCmp.set("v.value", selectCmp.get("v.value"));
    },
    onMultiSelectChange: function(cmp, evt) {
        var selectCmp = cmp.find("InputSelectMultiple");
        resultCmp = cmp.find("multiResult");
        resultCmp.set("v.value", selectCmp.get("v.value"));
    },
    onChange: function(cmp, evt) {
        var dynamicCmp = cmp.find("InputSelectDynamic");
        resultCmp = cmp.find("dynamicResult");
        resultCmp.set("v.value", dynamicCmp.get("v.value"));
    }
})