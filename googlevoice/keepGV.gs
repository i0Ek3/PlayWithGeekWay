function autoReplier() {
    var labelObj = GmailApp.getUserLabelByName('keepGV');
    var gmailThreads;
    var messages;
    var sender;

    for (var gg = 0; gg < labelObj.getUnreadCount(); gg++) {
        gmailThreads = labelObj.getThreads()[gg];
        messages = gmailThreads.getMessages();

        for (var ii = 0; ii < messages.length; ii++) {
            if (messages[ii].isUnread()) {
                msg = messages[ii].getPlainBody();
                sender = messages[ii].getFrom();
                MailApp.sendEmail(sender, "Auto Reply", "666");
                messages[ii].markRead();
                messages[ii].moveToTrash();
            }
        }
    }
}
