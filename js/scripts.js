$('#open-reserve').click(function() {
    if($("#open-reserve").children("button").hasClass('btn-reserve')){
    $("#modal-reserve").modal('show');
    }
});

$('#btn-login').click(function() {
    if($("#btn-login").children("a").hasClass('open-login')){
    $("#loginModal").modal('show');
    }
});