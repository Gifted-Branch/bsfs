frappe.ui.form.on('Employee', {
    onload: function(frm) {
        // Hide timeline items
        frm.page.wrapper.find(".timeline-items.timeline-actions").css({'display':'none'});

        // Hide activity section in the footer
        frm.page.footer.find(".form-footer .form-link-group.activity-section").css({'display':'none'});

        // Hide communication section in the footer
        frm.page.footer.find(".form-footer .form-link-group.communication-section").css({'display':'none'});
    }
});

