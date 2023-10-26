// Copyright (c) 2023, Gifted Branch and contributors
// For license information, please see license.txt

frappe.ui.form.on('Shift Template', {
	shift_type: function(frm) {
        frm.set_value('shift_name', frm.doc.shift_type);
    }
});
