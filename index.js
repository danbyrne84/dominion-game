  // import all our cards from another file as it's cleaner
  import * as allCards from './allcards';
  let allCards = allCards();

  // a collection of 'card types' that we're interested in
  let selectedCardTypes = [];  


  // filter 'allCards' 
  function filterCards(cardType) {      
      // check if category is already in list, if it is remove it (ignore for now)
      let index = selectedCardTypes.indexOf(cardType);
      if (index >= -1) {
          selectedCardTypes.splice(index, 1);
      }
    
      // find available cards
      console.log('selected card type is ' + cardType);

      // add to the list of categories we want to display
      selectedCardTypes.push(cardType);

      console.log('selected card types', selectedCardTypes);
    
      // instead of filtering allCards only the checkbox that was last checked, instead we say is the current card category in the list of
      // selected card types

      //let filteredCards = allCards.filter(card => card.category == cardType);
      let filteredCards = allCards.filter(card => selectedCardTypes.includes(card.category));
    
      console.log('there are', filteredCards.length, 'cards selected');
      console.log('matching cards are', filteredCards);
    
      // now display these filtered cards on the page
      displayAvailable(filteredCards);
  }


  // this function should display all of the cards we have selected in the pane in the middle of the screen
  function displayAvailable(cardsToDisplay){

      console.log('displaying this set of cards', cardsToDisplay);  
      
      let container = document.getElementById('kCards');
      console.log('container is', container);
    
      // loop around the card collection 1 by 1
      for(let i=0;i<=cardsToDisplay.length-1;i++){ // i is set to 0, then 1, then 2 etc...
  
        // what card is it
        let currentCard = cardsToDisplay[i];  
  
        // append a div to the container for each card
        let newCardDiv = document.createElement('div');
        
        // create an image
        let cardImage = document.createElement('img');
        cardImage.src = currentCard.img;
        
        // put the image inside the card div
        newCardDiv.appendChild(cardImage);
        
        // put the card div inside the overall container
        container.appendChild(newCardDiv);
        
      } 
  }
