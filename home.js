var createnewprogramModal = document.getElementById('createnewprogramModal')
var modalBodyInput = createnewprogramModal.querySelector('.modal-body input')
createnewprogramModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = createnewprogramModal.querySelector('.modal-title')
  

  modalTitle.textContent = 'Create a New Program'
})

function saveChanges() {
    var description = document.getElementById("description1").value;
    return description
}

function saveHeader(){
    var programheader = document.getElementById("header1").value;
    return programheader
}


