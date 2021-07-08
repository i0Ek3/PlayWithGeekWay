//
// deletThemAll: delete all emails from your QQMail account
//

window.setInterval(function() {
    document.getElementById('mainFrame').contentWindow.document.getElementById('ckb_selectAll').click();
    document.getElementById('mainFrame').contentWindow.document.getElementById('quick_del').click();
},3000)
