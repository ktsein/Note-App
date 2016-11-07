(function(exports){
  function note(){
    this.text
  }
  note.prototype.takeNote = function(note){
      this.text = String(note);
    }
  note.prototype.returnNote = function(){
      return this.text;
    }

  exports.note = note;
})(this);
