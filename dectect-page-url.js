<script>
// Simple code that shows which page we are currently viewwing base of the anchor's url.

// will hold the value of all the links
var pageValues = [];

// Get The main wrapper to trigger the code
var theMenuWrapper = document.getElementById("thisIsAMenu").getElementsByTagName("li");

// Get a last parameter from current url
var param = window.location.href.split("/").filter(Boolean).slice(-1)[0];
  
console.log(param); 
console.log(theMenuWrapper.length); 
  
  
  
/****************
First Engine
We use the links to create dynamically id for the parents, stores the data and then ask the second Engine to add the styles.
****************/

for (var u = 0; u < theMenuWrapper.length; u++ ) {

    // We take the last value of the url and copy it into a temporary value
    var tempClassNamer = theMenuWrapper[u].getAttribute("id");

    // We put the current pop in a temporary variable
    var currentPop = tempClassNamer 

    // We check if current pop is empty if its the case we pop again
    if (currentPop == "") {
        currentPop = tempClassNamer 
    }

    // We push the value in a table that will call later tohelp us to identify the links.
    pageValues.push(currentPop);

    // We assign this value as an id to the parent of the <A>; the <LI>
    //this.theMenuWrapper[u].parentNode.id = currentPop;
}

/****************
Second Engine
We look up for a match arrcording to the values pushed in pageValues.
We apply a style upon match then exit the loop
****************/

// We loop though each elm
for (var i = 0; i < pageValues.length; i++) {

    // We check for a match
    if (param == pageValues[i]) {

        // We get the element with the same class name
        var theSelected = document.getElementById(pageValues[i]);

        // We add a new class to the parent
       theSelected.className = theSelected.className.replace( /(?:^|\s)not-active-tab(?!\S)/g , ' active-tab' );
     
      
        // If we found what we want we leave the loop
        break;
      
    } else {
      
      //For the ones that did not match, we switch them to not-active status
      
      //We take the actual item in the loop and put it not-active.
      var theSelected = document.getElementById(pageValues[i]);
  
      theSelected.className = theSelected.className.replace( /(?:^|\s)active-tab(?!\S)/g , ' not-active-tab' );
  }
}

</script>
