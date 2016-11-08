function testStoreNote(){
  var myNotes = new NoteList();
  myNotes.addNote("My first language is Ruby")
  if (myNotes.noteArray[0] != "My first language is Ruby"){
    throw new Error("The app is not storing notes")
  }
}

function testPrintList(){
  var myNotes = new NoteList();
  myNotes.addNote("My first language is Ruby")
  if (myNotes.allNotes() != myNotes.noteArray){
    throw new Error("The app is not printing stored notes")
  }
}

testStoreNote();
testPrintList();
