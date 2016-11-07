function testTakeNote(){
  var note_1 = new note();
  note_1.takeNote("My favourite language is JavaScript");
  if (note_1.text != "My favourite language is JavaScript"){
    throw new Error("The app is not taking note!")
  }
}

function testReturnNote(){
  var note_1 = new note();
  note_1.takeNote("My favourite language is JavaScript");
  if (note_1.returnNote() != "My favourite language is JavaScript"){
    throw new Error("The app is not return notes taken")
  }
}

testTakeNote();
testReturnNote();

//Console is not throwing two errors one time?
