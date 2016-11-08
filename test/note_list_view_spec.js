function testNoteListView(){
  var myNotes = new NoteList();
  myNotes.addNote("Note 1");
  myNotes.addNote("Note 2");

  if (NoteListView(myNotes.noteArray) != "<ul><li>Note 2</li><li>Note 1</li></ul>"){
    throw new Error("The app is not converting list of notes into HTML")
  }
}

testNoteListView();
