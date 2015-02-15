var fs = require('fs');

function load_editlogin_values() {
    var key = load_key_from_file();
    $("#inputid").val(key.id);
    $("#inputsecret").val(key.secret);
}

function save_key_to_file(key) {
    var key_file = key_config_file();
    fs.writeFileSync(key_file, JSON.stringify(key));
}

function install_buttons_handler() {
    $('#btnsavelogin').on('click', function () {
        save_key_to_file({
            "id": $("#inputid").val(),
            "secret": $("#inputsecret").val()
        });
        window.location.href = "index.html";
    });

    $('#btncancel').on('click', function () {
        window.location.href = "index.html";
    });

}
