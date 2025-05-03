// Copyright (c) 2025, Gifted Branch and contributors
// For license information, please see license.txt

frappe.ui.form.on("Monthly Grocery and other Expenses form", {
    week_1: function(frm, cdt, cdn) {
        calculate_total(frm, cdt, cdn);
    },
    week_2: function(frm, cdt, cdn) {
        calculate_total(frm, cdt, cdn);
    },
    week_3: function(frm, cdt, cdn) {
        calculate_total(frm, cdt, cdn);
    },
    week_4: function(frm, cdt, cdn) {
        calculate_total(frm, cdt, cdn);
    }
});

function calculate_total(frm, cdt, cdn) {
    // Get the current child row being edited
    var child = locals[cdt][cdn];
    
    // Calculate the total for the 4 weeks
    var total = (child.week_1 || 0) + (child.week_2 || 0) + (child.week_3 || 0) + (child.week_4 || 0);
    
    // Set the total value in the child row
    frappe.model.set_value(cdt, cdn, 'total', total);
}
