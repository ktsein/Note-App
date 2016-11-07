(function(exports){
  function noteList(){
    this.noteArray = [];
  }
  noteList.prototype.add = function(note){
    this.noteArray.unshift(String(note));
  }
  noteList.prototype.printList = function(){
    for (var i = 0; i < this.noteArray.length; i += 1){
      return this.noteArray[i];
    }
  }
  exports.noteList = noteList;
})(this);
