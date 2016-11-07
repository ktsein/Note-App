(function(exports){
  function noteList(){
    this.noteArray = [];
  }
  noteList.prototype.add = function(note){
    this.noteArray.unshift(String(note));
  }
  // noteList.prototype.showNotes = function(){
  //
  // }
  exports.noteList = noteList;
})(this);
