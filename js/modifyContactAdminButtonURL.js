$('document').ready(function() {
        var searchResults = document.querySelectorAll('#help_panel div div div div div a.btn-contact-admin.btn-primary.btn-xs');

        if(searchResults.length === 1) {
            var button = searchResults[0];
            var username = document.getElementById('username-reference').textContent
            
            button.href = contactAdminButtonSettings.url
                + '&gatorlink=' + contactAdminButtonSettings.username 
                + '&project_id=' + contactAdminButtonSettings.project_id
                + '&redcap_username=' + contactAdminButtonSettings.username
                + '&registered_in_redcap=1'
                + '&first_name=' + contactAdminButtonSettings.user_firstname
                + '&last_name=' + contactAdminButtonSettings.user_lastname
                + '&email=' + contactAdminButtonSettings.email
        }
});
