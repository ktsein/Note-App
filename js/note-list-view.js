(function(exports){

  function NoteListView(list){
    var noteListHTML = '<ul>';
    for (var i=0; i < list.length; i +=1 ){
      noteListHTML += '<li>' + list[i] + '</li>';
    }
    noteListHTML += '</ul>';
    return noteListHTML;
  }
  exports.NoteListView = NoteListView;

})(this);
