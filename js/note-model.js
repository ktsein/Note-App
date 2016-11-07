(function(exports){
  function takeNote(note){
    this.text = String(note);
    return this.text;
  };
  function returnNote(note){
    return note;
  };

  exports.takeNote = takeNote;
  exports.returnNote = returnNote;
})(this);
