(function() {
  function MenuItem(container, name) {
    this.name = name;
    this.container = document.getElementById(container);
    this.element = document.createElement('li');
    this.element.innerText = name;
    this.container.appendChild(this.element);
  }

  let menuItems = [];
  menuItems.push( new MenuItem( 'container', 'Home' ));
  menuItems.push( new MenuItem( 'container', 'Profile' ));
  menuItems.push( new MenuItem( 'container', 'Settings' ));
  menuItems.push( new MenuItem( 'container', 'Privacy Policy' ));
  menuItems.push( new MenuItem( 'container', 'Contact' ));
})();


