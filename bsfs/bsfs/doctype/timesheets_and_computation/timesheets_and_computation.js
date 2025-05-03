// Copyright (c) 2025, Gifted Branch and contributors
// For license information, please see license.txt

frappe.ui.form.on("Timesheets and Computation", {
	validate: function(frm) {
        var total_awake_hours = 0;
        var total_asleep_hours = 0;

        // Iterate through the child table
        $.each(frm.doc.timesheet_detail_computation, function(i, d) {
            total_awake_hours += flt(d.awake_hrs);  
            total_asleep_hours += flt(d.sleep_hrs);
        });

        // Set the totals in the parent form
        frm.set_value('total_awake_hours', total_awake_hours);
        frm.set_value('total_asleep_hours', total_asleep_hours);
    }
});
