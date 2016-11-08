function testTakeNote(){
  var note = new Note();
  note.takeNote("My favourite language is JavaScript");
  if (note.text != "My favourite language is JavaScript"){
    throw new Error("The app is not taking note!")
  }
}

function testReturnNote(){
  var note = new Note();
  note.takeNote("My favourite language is JavaScript");
  if (note.returnNote() != "My favourite language is JavaScript"){
    throw new Error("The app is not return notes taken")
  }
}

testTakeNote();
testReturnNote();
