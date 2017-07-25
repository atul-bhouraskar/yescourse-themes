(function() {
    var root_element = document.getElementById('yc-root');
    root_element.addEventListener('click', function(e) {
        var target = e.target;
        if (target.tagName === 'A') {
            if (target.classList.contains('show-main-menu')) {
                root_element.classList.toggle('show-main-menu');
            }
            else if (target.classList.contains('show-user-menu')) {
                root_element.classList.toggle('show-user-menu');
            }
            else if (target.classList.contains('mdc-tab')) {
                var curr_active = target.parentNode.querySelector(
                    '.mdc-tab--active'
                );
                if (curr_active) {
                    curr_active.classList.remove('mdc-tab--active');
                    var current_selector = curr_active.dataset.ref;
                    if (current_selector) {
                        var curr_content =
                            document.querySelector(current_selector);
                        if (curr_content) {
                            curr_content.classList.remove('tab-content-active');
                            curr_content.classList.add('tab-content-inactive');
                        }
                    }
                }
                var new_selector = target.dataset.ref;
                if (new_selector) {
                    var new_content = document.querySelector(new_selector);
                    if (new_content) {
                        new_content.classList.add('tab-content-active');
                        new_content.classList.remove('tab-content-inactive');
                    }
                }
                target.classList.add('mdc-tab--active');
            }
        }
        else if (target.id === 'veil') {
            if (root_element.classList.contains('show-main-menu')) {
                root_element.classList.remove('show-main-menu');
            }
            if (root_element.classList.contains('show-user-menu')) {
                root_element.classList.remove('show-user-menu');
            }
        }
    });
})();
