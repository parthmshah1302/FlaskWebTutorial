function deleteNote(noteId){
    fetch('/delete-note',{
        method="POST",
        body:JSON.stringify({noteId: noteId}),
    }).then((_res)=>{
        window.location.href="/";
    });
}
document.querySelector("#note.id").addEventListener("click",temp(noteId))
function temp(noteId){
    console.log(noteId)
}
