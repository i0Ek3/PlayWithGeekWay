function clickCenter (element) {
  click(element.bounds().centerX(), element.bounds().centerY())
}

device.wakeUp();
sleep(1000);
launchApp("钉钉");
sleep(4000);
// belows location used for Redmi K30 Pro
click(547, 2327);
sleep(3000);
click(145, 1524);
//clickCenter(text("考勤打卡").findOnce());
sleep(4000);
//click(540, 1400);
clickCenter(text("上班打卡").findOnce());
sleep(3000);
back();
sleep(1000);
back();
sleep(1000);
back();
exit();
