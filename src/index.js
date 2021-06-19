import createDropDownMenu from './createDropDownMenu';
import events from './events';

/*
Things that I need to do:
- initiate
- when a menuItem is clicked
- sources button is clicked

 */

const main = (() => {
  const dropDownMenuDiv = document.getElementById('dropDownMenuDiv');

  const menuItems = [
    ['Nature', ['Yellowstone', 'Grand Canyon', 'Lake Tahoe']],
    ['Cities', ['New York', 'Los Angeles', 'Chicago', 'San Francisco']],
    ['Pets', ['Dogs', 'Cats', 'Fish']],
  ];

  const initiate = () => {
    dropDownMenuDiv.appendChild(createDropDownMenu.initiate(menuItems));
    events.initiate();
  };

  return { initiate };
})();

main.initiate();