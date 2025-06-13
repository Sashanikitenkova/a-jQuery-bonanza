$('#backBtn').click(() => window.history.back());
$('#forwardBtn').click(() => window.history.forward());
$('#closeBtn').click(() => alert('You can not close the tabs form browser with JS, but this is a fake button :)'));
$('#homeBtn').click(() => window.location.href='https://example.com');


$('#goBtn').click(() => {
    let url = $('#urlInput').val().trim();

    if(!url) {
        alert("Please enter a website address");
        return;
    }

    if (!/^https?:\/\//i.test(url)) {
        url = 'https://' + url;
    }

    window.open(url, "_blank");
    $('#urlInput').val('');
    $('#urlInput').focus();

})

$('#fadeOut').click(() => {
     $('#textFadeOut').fadeOut();
});
$('#append').click(() => {
    $('#textContainer').append('<p>This is newly added text!</p>')
});
$('#changeColor').click(() => {
    $('#textChangeColor').css('color', 'red');
    $('#textChangeColor').removeClass('grey-text text-darken-2');
});