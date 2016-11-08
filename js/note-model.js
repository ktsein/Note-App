(function(exports){

  function Note(){
    this.text
  }
  Note.prototype.takeNote = function(text){
    this.text = String(text);
  }
  Note.prototype.returnNote = function(){
    return this.text;
  }
  exports.Note = Note;

})(this);

// -- Note --

//javascript is sexy. "this".
