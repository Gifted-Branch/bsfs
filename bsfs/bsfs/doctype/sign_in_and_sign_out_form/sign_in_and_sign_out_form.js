// Copyright (c) 2025, Gifted Branch and contributors
// For license information, please see license.txt

frappe.ui.form.on("Sign in and Sign out form", {
	checkin: function(frm) {
        setDateTimeField(frm, 'check_in');
    },
    checkout: function(frm) {
        setDateTimeField(frm, 'check_out');
        calculateTotalHours(frm);
    },
});

function setDateTimeField(frm, field) {
    var nowMountain = moment().tz('America/Edmonton');
    frm.set_value(field, nowMountain.format('HH:mm:ss'));

    // If 'field' is 'check_out', explicitly set the format
    if (field === 'check_out') {
        frm.doc[field] = nowMountain.format('HH:mm:ss');
    }
}

function calculateTotalHours(frm) {
    var checkinDatetime = moment(frm.doc.check_in, 'HH:mm:ss');
    var checkoutDatetime = moment(frm.doc.check_out, 'HH:mm:ss');

    if (checkinDatetime.isValid() && checkoutDatetime.isValid()) {
        var timeDifference = checkoutDatetime.diff(checkinDatetime, 'seconds', true);
        frm.set_value('total_hours', (timeDifference / 3600));
        frm.refresh_field('total_hours');
    } else {
        frm.set_value('total_hours', 0.0);
        frm.refresh_field('total_hours');
    }
}