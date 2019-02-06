
// Isotoop starten
var iso = new Isotope( '.menu', {
  itemSelector: '.menu-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.gerechten',
    price: '.prijzen'
  }
});

// Sorteren bij klik
var sortByGroup = document.querySelector('.sort-by-button-group');
sortByGroup.addEventListener( 'click', function( event ) {
  // Enkel als geklikt wordt
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  // Op wat gesorteerd wordt aanduiden
  var sortValue = event.target.getAttribute('data-sort-value');
  iso.arrange({ sortBy: sortValue });
});

// Filteren bij klik
var filterByGroup = document.querySelector('.filter-by-button-group');
filterByGroup.addEventListener( 'click', function( event ) {
  // Enkel wanneer geklikt wordt
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  // Op wat gefilterd wordt aanduiden
  var filterValue = event.target.getAttribute('data-filter-value');
  iso.arrange({ filter: filterValue });
});

// Class toevoegen/wegnemen bij veranderen selectie
var buttonGroups = document.querySelectorAll('.button-group');
for ( var i=0; i < buttonGroups.length; i++ ) {
  buttonGroups[i].addEventListener( 'click', onButtonGroupClick );
}

function onButtonGroupClick( event ) {
  // Enkel als er geklikt wordt
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var button = event.target;
  button.parentNode.querySelector('.is-checked').classList.remove('is-checked');
  button.classList.add('is-checked');
}
