#!/bin/bash

adb reboot bootloader
fastboot flash recovery $1
fastboot boot $1
echo "flash no_replace_twrp_avb2.zip manually..."
echo "when you done this work, please run command: fastboot --disable-verity --disable-verification flash vbmeta vbmeta.img"
echo "after then, run command: fastboot boot your_recovery_download_just_now"
