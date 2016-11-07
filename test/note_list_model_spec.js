function testStoreNote(){
  var note_2 = new note();
  note_2.takeNote("My first language is Ruby");
  var myNotes = new noteList();
  myNotes.add(note_2.text);
  if (myNotes.noteArray[0] != note_2.text){
    throw new Error("The app is not storing notes")
  }
}

function testPrintList(){
  var note_2 = new note();
  var note_3 = new note();
  note_2.takeNote("My first language is Ruby");
  var myNotes = new noteList();
  myNotes.add(note_2.text);
  if (myNotes.printList() != note_2.text){
    throw new Error("The app is not printing stored notes")
  }
}

testStoreNote();
testPrintList();
