var notesList = document.getElementById("notes-list");

var currentActiveNoteID = 0;
var currentNoteData = "";
var notes = new Array("new note");

function LoadNotes()
{
  for( var i=notes.length-1; i>= 0; i--)
  {
    var notesButton = document.createElement("button");
    var node = document.createTextNode(notes[i]);
    notesButton.appendChild(node);
    notesButton.setAttribute("id",i);
    notesButton.setAttribute("class","col-12-12 list-button gt-arrow");
    notesButton.setAttribute("onclick","DisplayFullNote(this.attributes['id'].value)");
    notesList.appendChild(notesButton);
  }
}

LoadNotes();


function DisplayFullNote(id)
{
  currentActiveNoteID = id;
  document.getElementById("main-editor").value = notes[id];
}

function CreateNote()
{
  notes.push("new note");
  RefreshNotes();
  DisplayFullNote(notes.length-1);
  document.getElementById("main-editor").focus();
}

function RefreshNotes()
{
  var notesButton = document.createElement("button");
  var node = document.createTextNode(notes[notes.length-1]);
  notesButton.appendChild(node);
  notesButton.setAttribute("id",notes.length-1);
  notesButton.setAttribute("class","col-12-12 list-button gt-arrow");
  notesButton.setAttribute("onclick","DisplayFullNote(this.attributes['id'].value)");
  notesList.appendChild(notesButton);
  notesList.insertBefore(notesButton,document.getElementById(notes.length-2));
}

function saveNote()
{
  if(document.getElementById("main-editor").value == "")
  {
    document.getElementById("main-editor").setAttribute("placeholder","new note");
    document.getElementById(currentActiveNoteID).innerHTML = "new note";
  }
  else {
    currentNoteData = document.getElementById("main-editor").value;
    notes[currentActiveNoteID] = currentNoteData+"";
    if(currentNoteData.length > 23)
    {
      document.getElementById(currentActiveNoteID).innerHTML = currentNoteData.slice(0,19)+"...";
    }
    else {
      document.getElementById(currentActiveNoteID).innerHTML = currentNoteData;
    }

    document.getElementById("charCount").innerHTML = currentNoteData.length + " Characters";

  }

}
