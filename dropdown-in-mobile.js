<script>
    document.addEventListener('DOMContentLoaded', function() {
        const search = document.querySelector('.e-filter');
        const baseUrl = search.getAttribute('data-base-url');
        const select = document.createElement('select');
        select.id = 'locationDropdown';

        const buttons = search.querySelectorAll('.e-filter-item');

        const urlParams = new URLSearchParams(window.location.search);
        const selectedOption = urlParams.get('e-filter-6e4222b-locations');

        buttons.forEach(button => {
            const option = document.createElement('option');
            option.value = button.getAttribute('data-filter');
            option.textContent = button.textContent;
            if (selectedOption && option.value === selectedOption) {
                option.selected = true;
            }
            select.appendChild(option);
        });

        select.addEventListener('change', function(event) {
            const selectedOption = event.target.value;
            
            urlParams.set('e-filter-6e4222b-locations', selectedOption);
            
            const newUrl = baseUrl + '?' + urlParams.toString();
            
            window.location.href = newUrl;
        });

        search.parentNode.insertBefore(select, search);

        const mediaQuery = `(max-width: 768px)`;
        const mqListener = window.matchMedia(mediaQuery);

        function handleMediaChange(mqListener) {
            if (mqListener.matches) {
                search.style.display = 'none';
                select.style.display = 'inline-block';
            } else {
                search.style.display = 'flex';
                select.style.display = 'none';
            }
        }

        handleMediaChange(mqListener);
        mqListener.addListener(handleMediaChange);
    });
</script>
