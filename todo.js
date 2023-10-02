let addtaskbutton = document.getElementById('btn');


addtaskbutton.addEventListener('click', function() {
    const inputBox = document.getElementById('task'); // Get the input element
    const textinfo = inputBox.value.trim(); 
    if (textinfo !== "") {

    // create the <div> element with class listitem
    const listItemDiv = document.createElement('div');
    listItemDiv.classList.add('listitem');
    // create the <ul> element with class my-list and type square
    const ulElement = document.createElement('ul');
    ulElement.classList.add('my-list');
    ulElement.setAttribute('type', 'square');

    // Create the <li> element with class "list-item-content"
    const liElement = document.createElement('li');liElement.classList.add('my-list-li');
    liElement.textContent = textinfo;

    // Create the <button> element with class "delitem"
    const buttonElementDone = document.createElement('button');
    buttonElementDone.classList.add('donebutn');buttonElementDone.textContent = "Done";

    const buttonElementDel = document.createElement('button');
    buttonElementDel.classList.add('delitem');buttonElementDel.textContent = "Delete";


    // Append the <li> element to the <ul> element
    ulElement.appendChild(liElement);

    // Append the <ul> element and <button> element to the inner <div>
    listItemDiv.appendChild(ulElement);
    listItemDiv.appendChild(buttonElementDone);
    listItemDiv.appendChild(buttonElementDel);

    // Append the inner <div> to the outermost <div>
    const listAreaDiv = document.querySelector('.listarea');
    listAreaDiv.appendChild(listItemDiv);

    // Clear the input box,setting empty value to inputBox
    inputBox.value = ""; 

    }
    
});

//Adding eventlistener in delete/done button. using 'event' as the parameter name or you can use e,evnt anythig instead of event

// When a click event occurs, the event listener checks if the clicked element has the class 'delitem' using event.target.classList.contains('delitem').

document.addEventListener('click', function(evnt) {
    if (evnt.target.classList.contains('delitem')) {
        const listItemDiv = evnt.target.parentNode; // Find the parent element which is <div class="listarea">
        listItemDiv.style.display = 'none'; // Hide the parent element
    }
});

document.addEventListener('click', function(evnt) {
    if (evnt.target.classList.contains('donebutn')) {
        const liElement = evnt.target.parentNode; // Find the parent element which is <ul type="square" class="my-list">
        liElement.querySelector('.my-list-li').style.textDecoration = 'line-through'; // Apply text decoration
        liElement.querySelector('.my-list-li').style.textDecorationColor = '#BB2525'; // Apply text decoration color
    }
});





