// Copyright (c) 2023, Gifted Branch and contributors
// For license information, please see license.txt

frappe.ui.form.on('Client Daily Activity', {
	//Get Client Daily Activity Template items
	template_name: function (frm) {
		if (frm.doc.template_name) {
			frm.clear_table('personal_plan_detail');
			frappe.model.with_doc('Client Daily Activity Template', frm.doc.template_name, function () {
				let source_doc = frappe.model.get_doc('Client Daily Activity Template', frm.doc.template_name);
				$.each(source_doc.personal_plan, function (index, source_row) {
					const target_row = frm.add_child('personal_plan_detail');
					target_row.dateday = source_row.dateday;
					target_row.morning = source_row.morning;
					target_row.afternoonevening = source_row.afternoonevening;
					target_row.activity_duration = source_row.activity_duration;
					target_row.staff_comment = source_row.staff_comment;
					frm.refresh_field('personal_plan_detail');
				});
			});
		}
	},
});