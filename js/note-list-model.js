(function(exports){

  function NoteList(){
    this.noteArray = [];
  }
  NoteList.prototype.addNote = function(text){
    note = new Note();
    note.takeNote(text);
    this.noteArray.unshift(note.text);
  }
  NoteList.prototype.allNotes = function(){
    return this.noteArray;
  }
  exports.NoteList = NoteList;

})(this);


// -- Note --

// NoteList.prototype.addNote = function(text, Note){
//   Note = Note || window.Note;
// }
//
// NoteList.prototype.addNote = function(text, Noteconstructor){
//   Noteconstructor = Noteconstructor || Note;
// }
