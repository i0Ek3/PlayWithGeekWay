# Xiaomi Mix2玩机经验

> 不刷机，不小米。

好吧，我买手机的目的只有一个，刷机。最近一直折腾第三方Android 9.0，但仍有各种各样的小问题，所以换回国际版MIUI。一边为了用Google，一边又为了使用小米钱包等服务，所以用[@linusyang92](https://github.com/linusyang92)提供的方法解决了该问题，感谢该同学，顺便也就记录下过程。


## 更新

- 10-27: 尝试在官方国际版下刷入自己提取的1025的文件试试，从目前来看，并不太顺利，手机好像崩了。
- 10-28: 复活，重新提取了对应的包。


## 过程

- 刷机前先备份数据，一定要备份数据。
- 解锁手机，通过申请官方的解锁工具解锁。
- 刷入第三方Recovery，比如TWRP或者~~OrangeFox~~(似乎是不好使)。
- 下载EU版MIUI ROM，可以去[这里](https://github.com/i0Ek3/Funny-ianpasm/tree/master/resource#third-rom)下载，~~我想en版和波兰版应该都可以~~(我想的是错的)。目前在波兰开发版MIUI 10 8.10.11上测试成功，所以以下内容是基于波兰版本的，使用的文件是[@linusyang92](https://github.com/linusyang92)的8.8.9的[Release](https://github.com/linusyang92/mipay-extract/releases)版本。
    - 下载完ROM后，可以自己通过[@linusyang92](https://github.com/linusyang92)提供的[脚本](https://github.com/linusyang92/mipay-extract)自行提取相应的安装包和制作相应的刷机文件，或者Mix2用户也可以直接使用该[Release](https://github.com/linusyang92/mipay-extract/releases)版本。
    - 重启至Recovery界面进行四清，然后刷入波兰版本的ROM，然后到Wipe界面点击Format Data，输入yes，清除后再刷入强制加密文件。随后再刷入其他文件即可。
    - 重启，一切OK。不过有个小小问题，似乎波兰版本的更新器有点问题，总是卡壳，看看~~8.10.18~~(并没有8.10.18，直接到了8.10.25)是否会改善一些(然而并没有改善)。
    - 其他注意事项请查看原repo。
- **10-28补充：**
    - 重新提取了对应的包，放在eufix-stable-mix2和eufix-weekly-mix2文件夹。最好刷对应的刷机包，我都提供了包名，直接下载即可，不建议混刷。测试结果在文件夹中的README.md里有说明。
    - 重新尝试在eu最新开发版和最新稳定版上直接刷原作者的8.8.9版本的Release文件，即测试不对应版本情况下小米服务是否ok。结果同上述测试结果相同。
    - 另外，可能较早版本的国内MIUI所内置的MiPay和最近版本的有些区别，本质上并无差异，所以不用担心刷卡后的界面不同问题。
    - 至于主题问题，请参考[https://en.miui.com/thread-533737-1-1.html](https://en.miui.com/thread-533737-1-1.html)。


## 参考

- [https://zhuanlan.zhihu.com/p/36370923](https://zhuanlan.zhihu.com/p/36370923)
- [https://github.com/linusyang92/mipay-extract](https://github.com/linusyang92/mipay-extract)





