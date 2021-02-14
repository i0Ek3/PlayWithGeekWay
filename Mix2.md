# Xiaomi Mix2玩机经验

> **手机已出二手。**

> 不刷机，不小米。

好吧，我买手机的目的只有一个，刷机。最近一直折腾第三方 Android 9.0，但仍有各种各样的小问题，所以换回国际版 MIUI。一边为了用 Google，一边又为了使用小米钱包等服务，所以用[@linusyang92](https://github.com/linusyang92)提供的方法解决了该问题，感谢该同学，顺便也就记录下过程。


## 更新

- 2019-02-18: 心血来潮，突然不想用国内开发版了，便下载了 weekly 9.2.14 和 stable V10.2.2.0 两个版本的 eu 版 MIUI，并把提取的包放在 release ，有需要的自取吧，刷机什么应该还是一样的。[补充]：刚才搞错了，用 eu 版的包去提取了，发现不对，便重新下载了国内最新稳定版，和 eu 同步版本号，但国内的开发版仍然停留在 9.1.24，所以就不打算提取开发版的了，直接用 linusyang92 的即可，这里只提取最新稳定版的。
- 2018-10-28: 复活，重新提取了对应的包。
- 2018-10-27: 尝试在官方国际版下刷入自己提取的 1025 的文件试试，从目前来看，并不太顺利，手机好像崩了。

## 刷机步骤

为了防止自己操作失误，还是写一个步骤吧。

```Shell
// extract, put China version MIUI rom and EU rom into mipay-extract/ then run below commands under current folder:
$ extract.sh --appvault
$ cleaner-fix.sh

// flash
1. Wipe system, data, cache, Dalvik / ART Cache, Internal Storage
2. Flash xiaomi.eu rom
3. FORMAT DATA
4. Flash eufix-force-fbe-oreo.zip
5. Flash other zips we extract just now
6. Reboot, all done!

```

## 过程

- 刷机前先备份数据，一定要备份数据。
- 解锁手机，通过申请官方的解锁工具解锁。
- 刷入第三方 Recovery，比如 TWRP 或者~~OrangeFox~~(似乎是不好使)。
- 下载 EU 版 MIUI ROM，可以去[这里](https://github.com/i0Ek3/Funny-ianpasm/tree/master/resource#third-rom)下载，~~我想 en 版和波兰版应该都可以~~(我想的是错的)。目前在波兰开发版 MIUI 10 8.10.11 上测试成功，所以以下内容是基于波兰版本的，使用的文件是[@linusyang92](https://github.com/linusyang92)的 8.8.9 的[Release](https://github.com/linusyang92/mipay-extract/releases)版本。
    - 下载完 ROM 后，可以自己通过[@linusyang92](https://github.com/linusyang92)提供的[脚本](https://github.com/linusyang92/mipay-extract)自行提取相应的安装包和制作相应的刷机文件，或者 Mix2 用户也可以直接使用该[Release](https://github.com/linusyang92/mipay-extract/releases)版本。
    - 重启至 Recovery 界面进行四清，然后刷入波兰版本的 ROM，然后到 Wipe 界面点击 Format Data，输入 yes，清除后再刷入强制加密文件，随后再刷入其他文件即可。
    - 重启，一切 OK。不过有个小小问题，似乎波兰版本的更新器有点问题，总是卡壳，看看~~8.10.18~~(并没有8.10.18，直接到了8.10.25)是否会改善一些(然而并没有改善)。
    - 其他注意事项请查看原 repo，如果你更新或者重新刷入了新版本的 EU rom，请重新。
- **10- 28补充：**
    - 重新提取了对应的包，放在 eufix-stable-mix2 和 eufix-weekly-mix2 文件夹。最好刷对应的刷机包，我都提供了包名，直接下载即可，不建议混刷。测试结果在文件夹中的 README.md 里有说明。
    - 重新尝试在 eu 最新开发版和最新稳定版上直接刷原作者的 8.8.9 版本的 Release 文件，即测试不对应版本情况下小米服务是否 ok。结果同上述测试结果相同。
    - 另外，可能较早版本的国内 MIUI 所内置的 MiPay 和最近版本的有些区别，本质上并无差异，所以不用担心刷卡后的界面不同问题。
    - 至于主题问题，请参考[https://en.miui.com/thread-533737-1-1.html](https://en.miui.com/thread-533737-1-1.html)。


## 参考

- [https://zhuanlan.zhihu.com/p/36370923](https://zhuanlan.zhihu.com/p/36370923)
- [https://github.com/linusyang92/mipay-extract](https://github.com/linusyang92/mipay-extract)





