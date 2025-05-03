// Copyright (c) 2023, Gifted Branch and contributors
// For license information, please see license.txt

frappe.ui.form.on('Assignments', {
	onload: function(frm) {
        // Check if the current user is assigned to the task and the document is not read
        var isAssignedUser = frm.doc.assigned_to === frappe.session.user;
        var isManagementRole = frappe.user.has_role('Management');

        if (isAssignedUser || isManagementRole) {
            // Set the "Read" checkbox to true (checked) in read-only mode
            frm.set_df_property('read', 'read_only', 1);
            frm.set_value('read', 1);
        } else {
            // If not assigned user or management, hide the form
            frm.dashboard.hide();
            frm.page.clear_primary_action();
            frm.page.clear_menu();
        }
    }
});
