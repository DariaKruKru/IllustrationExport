//Resize all artboards in the document so their resolution is suitable for Unity Engine – divisible by 4
var divisibleInt = 4;

var currentAbWidth;
var currentAbHeight;
var currentAbLeft;
var currentAbTop;

var newAbWidth;
var newAbRight;
var newAbHeight;
var newAbBottom;

if (app.documents.length == 0) {
    alert("there are no open documents");
}

else {
    var idoc  = app.activeDocument;
    var title = "Resize All Artboards";

    try {

        for (i=0; i<idoc.artboards.length; i++) {
            var abBounds = idoc.artboards[i].artboardRect; // left, top, right, bottom

			//set the integer value for an artboard position and sizes, so the png integer values for the size are not deviated
            currentAbLeft = Math.floor(abBounds[0]);
            currentAbTop = Math.floor(abBounds[1]);

			currentAbWidth = Math.floor(abBounds[2]) - currentAbLeft;
			currentAbHeight = currentAbTop - Math.floor(abBounds[3]);

			newAbWidth = (currentAbWidth + divisibleInt) - (currentAbWidth % divisibleInt);
			newAbRight = newAbWidth + currentAbLeft;

			newAbHeight = (currentAbHeight + divisibleInt) - (currentAbHeight % divisibleInt);
			newAbBottom = currentAbTop - newAbHeight;

            idoc.artboards[i].artboardRect = [currentAbLeft, currentAbTop, newAbRight, newAbBottom];
        }
    }

    catch(e) {
        alert(e.message);
        /** Exist gracfully for now */
    }
}