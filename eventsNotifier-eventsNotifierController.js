/* eventsNotifierController.js */
{
    fireComponentEvent : function(cmp, event,helper) {
        helper.fireComponentEventHelper(cmp, event,helper);
        helper.fireApplicationEventHelper(cmp, event,helper);
    },

    fireApplicationEvent : function(cmp, event,helper) {
        helper.fireApplicationEventHelper(cmp, event,helper);
    }
}