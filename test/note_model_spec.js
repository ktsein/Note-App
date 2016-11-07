// var takeNote = require("../js/note-model").takeNote;
// var returnNote = require("../js/note-model").returnNote;

function testTakeNote(){
  var note = new takeNote("My favourite language is JavaScript");
  if (note.text != "My favourite language is JavaScript"){
    throw new Error("The app is not taking note!")
  }
};

testTakeNote();
